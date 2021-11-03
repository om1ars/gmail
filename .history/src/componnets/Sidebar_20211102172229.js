import { Button, IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <IconButton>
                <Button startIcon={<Add />} fontSize='large'>Compose</Button>
            </IconButton>
        </div>
    )
}
