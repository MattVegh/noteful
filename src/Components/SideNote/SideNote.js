import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNote(props) {
    console.log(props)
    return (
        <div className='SideNote'>
            <Link to='/'>Back</Link>
            <h1>{props.folders.name}</h1>
        </div>
    )
}