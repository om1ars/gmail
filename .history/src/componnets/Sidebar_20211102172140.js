import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <IconButton>
                <Button start>Compose</Button>
            </IconButton>
        </div>
    )
}
