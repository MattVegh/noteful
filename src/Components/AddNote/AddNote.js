import React, { Component } from 'react'
import './AddNote.css'
import { Link } from 'react-router-dom'


export default class AddNote extends Component {
    render() {
    return (
        <section className='AddNote'>
            <Link to='/'>Back</Link>
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
}