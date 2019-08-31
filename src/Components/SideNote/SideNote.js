import React from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../../NoteContext';

export default function SideNote(props) {
    // const folder = props.folders.filter(folder => folder.id === props.match.params.folderId);
    return (
        <div className='SideNote'>
            <Link to='/'>Back</Link>
            <NoteContext.Consumer>
                {(value) => {
                    console.log(value)
                }}
            </NoteContext.Consumer>
        </div>
    )
    
}