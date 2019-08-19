import React from 'react'
import './AddFolder.css'

export default function AddFolder() {
    return (
        <section className='AddFolder'>
            <button>Back</button>
            <h3>Create a folder</h3>
            <h6>Name</h6>
            <input type='text'></input>
            <button>Add Folder</button>
        </section>
    )
}