import React from 'react'
import './Login.css'
import gmail from '../assets/gmail.png'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'

const Login = () => {

    const signin = () => {
        auth.signInWithPopup(provider).then()
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src={gmail} />
                <Button onClick={() => signin()} color='primary' variant='contained'>Sign in </Button>
            </div>
        </div>
    )
}

export default Login
