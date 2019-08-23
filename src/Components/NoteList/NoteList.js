import React from 'react'
// import Note from './Note/Note'
import './NoteList.css'
import { Link } from 'react-router-dom'

export default function NoteList(props) {
     const note = props.notes.filter(note => note.folderId === props.match.params.folderId);
     console.log(note)
    return (
        <section className='NoteList'>
            <ul>
            {note.map(note =>
                 <li key={note.id}>
                    <Link to={`folder/:folderId/:noteId`}  className='NoteHeader'>{note.name}</Link>
                    <p className='NoteDate'>{note.modified}</p>
                    <button className='DeleteNoteButton'>Delete Note</button>
                </li>)}
            </ul>
            <Link to='/AddNote'>Add Note</Link>
        </section>
    )
}