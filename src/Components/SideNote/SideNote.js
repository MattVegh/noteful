import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNote(props) {
    const folder = props.folders.filter(folder => folder.id === props.match.params.folderId);
    return (
        <div className='SideNote'>
            <Link to='/'>Back</Link>
            <h1>{folder.name}</h1>
        </div>
    )
}