import React from 'react'
import './Login.css'
import gmail from '../assets/gmail.png'
import { Button } from '@material-ui/core'

const Login = () => {

    
    return (
        <div className='login'>
            <div className='login__container'>
                <img src={gmail} />
                <Button color='primary' variant='contained'>Sign in </Button>
            </div>
        </div>
    )
}

export default Login
