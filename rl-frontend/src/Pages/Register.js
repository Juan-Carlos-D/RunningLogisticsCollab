import React, { useState } from 'react'
import axiosInstance from '../Config/axiosCommon'

//CSS
import '../CSS/Register.css'

function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nameFirst, setNameFirst] = useState("")
    const [nameLast, setNameLast] = useState("")

    const [response, setResponse] = useState(null)

    const register = (event) => {
        event.preventDefault();

        axiosInstance.post('auth/register', {
            "email": email,
            "password": password,
            "nameFirst": nameFirst,
            "nameLast": nameLast
        })
            .then(res => setResponse("Success!"))
            .catch(error => {
                console.error('Error sending data:', error)
                setResponse(false)
            })
    }

    return (
        <div id='register'>
            <form onSubmit={register} className='register-form'>
                <h1>Account Sign-Up</h1>
                <div className='form-group'>
                    <input
                        type='text'
                        value={nameFirst}
                        onChange={(e) => setNameFirst(e.target.value)}
                        required
                        placeholder='First Name'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        value={nameLast}
                        onChange={(e) => setNameLast(e.target.value)}
                        required
                        placeholder='Last Name'
                    />
                </div>
                <div className='form-group'>

                    <input
                        type='email'
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
                {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
            </form>
        </div>
    )
}

export default Register