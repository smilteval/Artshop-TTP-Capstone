import React, {useContext, useState, useEffect} from 'react'
import './Signup.css'
import {UserContext} from '../context/UserContext';

export default ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [file, setFile] = useState(null);
    // const [imagePreview, setImagePreview] = useState(); 
    const [error, setError] = useState('');

    // Come back here and add to the imagePreview in the useEffect 

    const {user, setUser} = useContext(UserContext);
    console.log("user ", user);

    useEffect(() => {
        if(user){
            history.push('/');
        }
    }, [user])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //creates authenticated user.
            const response = await fetch ('https://ttp-art-store.herokuapp.com/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    // changed so username is not email
                    email,
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
        <div className="divSignup">
            <h2 className="Signup">
                Signup
            </h2>

            {/* form for signup */}
            <form onSubmit={handleSubmit}>

                 {/* username field */}
                 <input className="username"
                    type = 'username'
                    placeholder="Username"
                    value = {username}
                    onChange = {(event) => {
                        setError('');
                        setUsername(event.target.value)
                    }}
                />
                <br/>
                {/* TODO: NOT SURE IF HOOKED UP */}

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

                 {/* Avatar field */}
                 <input className="avatar"
                    type = 'file'
                    placeholder="Add an image"
                    value = {password}
                    onChange = {(event) => {
                        // setError('');
                        setFile(event.target.files[0])}
                    }
                />
                <br/>

                {/* <img src={imagePreview} /> */}
                {/* <br/> */}

                {/* submit button */}
                <button className="button">Signup</button>
            </form>

            {error && <p>{error}</p>}

        </div>
    )
}