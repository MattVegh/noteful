import React from 'react'
import './Folder.css'
import { Link } from 'react-router-dom'


export default function Folder(props) {
    const folder = props.folders.find(folder => folder.id === props.match.params.folderId)
    
    return (
        <div className='Folder'>
            <li className='IndvFolder' key={folder.id}>
                    <p className='FolderContent'>placeholder</p>
            </li>
            
            
        </div>
    )
}