import React from 'react'
import './Login.css'
import gmail from '../assets/gmail.png'

const Login = () => {
    return (
        <div className='login'>
            <div className='login__container'>
                <img src={gmail} />
            </div>
        </div>
    )
}

export default Login
