import React, { Component } from 'react'
import './AddFolder.css'
import { Link } from 'react-router-dom'

export default class AddFolder extends Component {
    render() {
    return (
        <section className='AddFolder'>
            <Link to='/'>Back</Link>
            <h3>Create a folder</h3>
            <h6>Name</h6>
            <input type='text'></input>
            <button>Add Folder</button>
        </section>
    )
    }
}