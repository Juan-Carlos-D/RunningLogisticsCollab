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
                setResponse("Login failed. Please check your email and password.")
            })
    }

    return (
        <section className="login-section">
            <div className="login-content">

                <form onSubmit={login} className="login__form">
                    <h2>Account Log-In</h2>
                    <p>Please log in using the form below:</p>
                    <div className="login__group">
                        <div>
                            <label htmlFor="email" className="login__label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="login__input"
                                placeholder="Write your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="login__label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="login__input"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <p className="login__message">{response}</p>
                    <div>
                        <button type="submit" className="login__button">Log In</button>
                        <p className="login__signup">
                            Don't have an account? <a href="#">Sign up</a>
                        </p>
                        <a href="#" className="login__forgot">
                            Forgot your password?
                        </a>
                        
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;