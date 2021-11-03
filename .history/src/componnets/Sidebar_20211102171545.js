import React from 'react'

export const Sidebar = ({sidebarOpen}) => {
    return (
        <div style={sidebarOpen ? {backgroundColor: 'yelow'}:  {height: `side`, backgroundColor: 'red'}}>
            
        </div>
    )
}
