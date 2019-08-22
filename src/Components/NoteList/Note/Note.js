import React from 'react'
import './Note.css'
import { Route, Link } from 'react-router-dom'


export default function Note(props) {
    const note = props.notes.find(note => note.id === props.match.params.noteId)
    console.log(note)
    return (
        <div className='Note'>
            <Link to='/'>Back</Link>
            <li className='IndvNote' key={note.id}>
                    <Link to={`/note/${note.id}`}  className='NoteHeader'>{note.name}</Link>
                    <p className='NoteDate'>{note.modified}</p>
                    <button className='DeleteNoteButton'>Delete Note</button>
                </li>
            <p className='NoteContent'>{note.content}</p>
            
        </div>
    )
}