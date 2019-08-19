import React from 'react'
import './AddNote.css'

export default function AddNote() {
    return (
        <section className='AddNote'>
            <button>Back</button>
            <h3>Create a note</h3>
            <p>Name</p>
            <input type='text'></input>
            <p>Content</p>
            <input type='text'></input>
            <p>Folder</p>
            <select>
                <option>Folders</option>
                <option>Folders</option>
                <option>Folders</option>
            </select>
        </section>
    )
}