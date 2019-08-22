import React from 'react'
import Note from './Note/Note'
import './NoteList.css'
import { Route, Link } from 'react-router-dom'

export default function NoteList(props) {
    return (
        <section className='NoteList'>
            <ul>
            {props.notes.map(note =>
                 <li key={note.id}>
                    <Link to={`/note/${note.id}`}  className='NoteHeader'>{note.name}</Link>
                    <p className='NoteDate'>{note.modified}</p>
                    <button className='DeleteNoteButton'>Delete Note</button>
                </li>)}
                
            </ul>
            <Link to='/AddNote'>Add Note</Link>
        </section>
    )
}