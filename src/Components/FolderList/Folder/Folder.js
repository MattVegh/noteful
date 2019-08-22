import React from 'react'
import './Folder.css'
import { Route, Link } from 'react-router-dom'


export default function Folder(props) {
    const folder = props.folders.find(folder => folder.id === props.match.params.folderId)
    console.log(folder)
    return (
        <div className='Folder'>
            <Link to='/'>Back</Link>
            <li className='IndvFolder' key={folder.id}>
                    <Link to={`/folder/${folder.id}`}  className='FolderHeader'>{folder.name}</Link>
            </li>
            <p className='FolderContent'>placeholder</p>
            
        </div>
    )
}