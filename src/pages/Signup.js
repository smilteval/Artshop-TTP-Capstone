import React, { useContext, useState, useEffect, useRef } from "react";
import "./Signup.css";
import { UserContext } from "../context/UserContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [blurb, setBlurb] = useState("");

  const [avatar, setAvatar] = useState(null);
  const [imagePreview, setImagePreview] = useState();

  const [error, setError] = useState("");
  const fileInputRef = useRef();

  // Come back here and add to the imagePreview in the useEffect

  const { user, setUser } = useContext(UserContext);
  console.log("user ", user);

  useEffect(() => {
    if (user) {
      history.push("/home");
    }
  }, [user]);

  //image preview for your avatar/pfp
  useEffect(() => {
    if (avatar) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(avatar);
    } else {
      setImagePreview(null);
    }
  }, [avatar]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //   const formData = new FormData();
      //   formData.append(
      //     "data",
      //     JSON.stringify({
      //       username,
      //       // changed so username is not email
      //       email,
      //       password,
      //       name,
      //       blurb,
      //     })
      //   );
      //   formData.append("files.image", avatar);

      //   const response = await fetch(
      //     "https://ttp-art-store.herokuapp.com/auth/local/register",
      //     {
      //       method: "POST",
      //       body: formData,
      //     }
      //   );
      //   const data = await response.json();

      //creates authenticated user.
      const response = await fetch(
        "https://ttp-art-store.herokuapp.com/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            name,
            blurb,
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
    <div className="signup-page">
      

      <form onSubmit={handleSubmit} id="signup-form">
        <div id="profile-pic-upload">
          {imagePreview ? (
            <img id="profile-pic-preview" src={imagePreview} />
          ) : (
            <button
              id="upload-profile-pic-btn"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              <i id="upload-img-text">Please upload your profile image</i>
            </button>
          )}

          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setAvatar(file);
              } else {
                setAvatar(null);
              }
            }}
          />
        </div>
        <div id="signup-info-upload">
        <h2 className="signup-title">Signup</h2>
          <TextField
            label="Username"
            variant="filled"
            size="small"
            required
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <br />

          <TextField
            label="Full Name"
            variant="filled"
            size="small"
            required
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />

          <TextField
            label="Email"
            variant="filled"
            type="email"
            size="small"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />

          <TextField
            label="Password"
            variant="filled"
            type="password"
            size="small"
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br />

          <TextField
            label="Bio"
            variant="filled"
            size="small"
            multiline
            rowsMax={5}
            rows={5}
            placeholder="Tell us about yourself"
            value={blurb}
            onChange={(event) => {
              setBlurb(event.target.value);
            }}
          />
          <br />
          <Button
            id="signup-btn"
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            Signup
          </Button>
        </div>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};
