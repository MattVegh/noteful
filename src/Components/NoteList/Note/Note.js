import React from 'react'
import './Note.css'
import { Link } from 'react-router-dom'


export default function Note(props) {
    // const note = props.notes.filter(note => note.id === props.match.params.noteId);
    // const folder = props.folders.filter(folder => folder.id === props.match.params.folderId)
    // console.log(props.match.params.noteId)
    // console.log(folder)

    const noteArray = props.notes.filter(note => note.id === props.match.params.noteId);
    const note = noteArray[0]
    const folder = props.folders.filter(folder => folder.id === props.match.params.folderId)
    console.log(note)
    
    
    return (
        <div className='Note'>
            <li className='IndvNote' key={note.id}>
                    <Link to={`folder/${folder.id}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
                    <p className='NoteDate'>{note.modified}</p>
                    <button className='DeleteNoteButton'>Delete Note</button>
                </li>
            <p className='NoteContent'>{note.content}</p>
            
        </div>
    )
}