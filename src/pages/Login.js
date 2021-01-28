import React, { useContext, useState, useEffect } from "react";
import "./Login.css";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

export default ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, setUser } = useContext(UserContext);
  console.log("user ", user);

  useEffect(() => {
    if (user) {
      history.push("/home");
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //Check if the user is authenticated
      const response = await fetch(
        "https://ttp-art-store.herokuapp.com/auth/local",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            identifier: email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log("data", data);

      //Display error if there is one
      if (data.message) {
        setError(data.message[0].messages[0].message);

        return; //Stop execution
      }

      setUser(data);
    } catch (err) {
      setError("Something went wrong" + err);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} id="login-form">
        <h2 className="login-title">Login</h2>

        <TextField
          label="Email"
          type="email"
          variant="filled"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          label="Password"
          type="password"
          variant="filled"
          required
          value={password}
          onChange={(event) => {
            setError("");
            setPassword(event.target.value);
          }}
        />
        <br />
        <br />

        <Button
          id="login-btn"
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<LockOpenIcon />}
        >
          Login
        </Button>
        <br />
        <br />
        <p className="signup-text">
          Don't have an account?{" "}
          <Link className="signup-link" to="/signup">
            Sign up!
          </Link>
        </p>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};
