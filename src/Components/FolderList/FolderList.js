import React from 'react'
import './FolderList.css'
import { Link } from 'react-router-dom'

export default function FolderList(props) {
    
    return (
        <div className='FolderList'>
            <ul>
                {props.folders.map(folder => <Link to={`/folders/${folder.id}`}key={folder.id}>{folder.name}</Link>)}
                
            </ul>
            <Link to='/AddFolder'>Add Folder</Link>
        </div>
    )
}