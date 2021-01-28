import React, {useContext, useState, useEffect} from 'react'
import './Login.css'
import {UserContext} from '../context/UserContext';
import { Link } from 'react-router-dom';

export default ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {user, setUser} = useContext(UserContext);
    console.log("user ", user);

    useEffect(() => {
        if(user){
            history.push('/home');
        }
    }, [user])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //Check if the user is authenticated
            const response = await fetch ('https://ttp-art-store.herokuapp.com/auth/local', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    identifier: email,
                    password
                })
            })
    
            const data = await response.json();
            console.log("data", data);
            
            //Display error if there is one
            if(data.message){
                setError(data.message[0].messages[0].message)
    
                return //Stop execution
            }

            setUser(data);

        } catch(err){
            setError('Something went wrong' + err)
        }


    }

    return (
        <div className="divLogin">
            <h2 className="Login">
                Login
            </h2>

            {/* form for login */}
            <form onSubmit={handleSubmit}>

                {/* email field */}
                <input className="email"
                    type = 'email'
                    placeholder="Email"
                    value = {email}
                    onChange = {(event) => {
                        setError('');
                        setEmail(event.target.value)
                    }}
                />
                <br/>

                {/* password field */}
                <input className="password"
                    type = 'password'
                    placeholder="Password"
                    value = {password}
                    onChange = {(event) => {
                        setError('');
                        setPassword(event.target.value)}
                    }
                />
                <br/>

                {/* submit button */}
                <button className="button">Login</button>
            </form>

            {/* link to sign up page */}
            <p className="signUp">Don't have an account? <Link className="signUpButton" to="/signup">Sign up!</Link></p>

            {error && <p>{error}</p>}

        </div>
    )
}
