import React from 'react'
import './EmailRow.css'

export const EmailRow = ({title, subject, desc, time, id}) => {
    return (
        <div className='emailRow'>
            <div className='emailRow__options'></div>
            <div className='emailRow__options'></div>
        </div>
    )
}
