import React from 'react'
import Note from './Note/Note'
import './NoteList.css'

export default function NoteList() {
    return (
        <section className='NoteList'>
            <ul>
                <Note />
                <Note />
                <Note />
            </ul>
            <button>Add Note</button>
        </section>
    )
}