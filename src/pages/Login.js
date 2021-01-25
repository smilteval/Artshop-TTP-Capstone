import React, {useState} from 'react'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        
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
    }

    return (
        <div>
            <h2>
                Login
            </h2>

            <form onSubmit={handleSubmit}>
                <input
                    type = 'email'
                    value = {email}
                    onChange = {(event) => setEmail(event.target.value)}
                />
                <br/>
                <input
                    type = 'password'
                    value = {password}
                    onChange = {(event) => setPassword(event.target.value)}
                />
                <br/>
                <button>Login</button>
            </form>

        </div>
    )
}
