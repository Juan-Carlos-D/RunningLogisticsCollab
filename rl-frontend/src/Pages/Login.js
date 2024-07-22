import React, { useState } from 'react'
import axiosInstance from '../Config/axiosCommon'

//CSS
import '../CSS/Login.css'

function Login({ setProfile }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [response, setResponse] = useState("Sign in to your account to access your profile, history, and any private pages you've been granted access to.");

    const login = (event) => {
        event.preventDefault();

        axiosInstance.post('auth/login', {
            "email": email,
            "password": password
        })
            .then(res => {
                const { name_first, name_last } = res.data;
                setResponse("Success!  Welcome " + name_first + " " + name_last + ".")
                setProfile(name_first)
            })
            .catch(error => {
                console.error('Error sending data:', error)
                setResponse(false)
            })
    }

    return (
        <div id='login'>
            <form onSubmit={login} className='sign-in-form'>
                <h1>Account Log-In</h1>
                <p id='loginMessage'>
                    {response}
                </p>
                <div className='form-group'>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Password'
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default Login