import React from 'react'
import './Note.css'

export default function Note() {
    return (
        <div className='Note'>
            <h3 className='NoteHeader'>Note Title(this should be a link to the note)</h3>
            <p className='NoteDate'>Date last modified</p>
            <button className='DeleteNoteButton'>Delete Note</button>
        </div>
    )
}