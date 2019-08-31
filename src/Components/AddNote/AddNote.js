import React, { Component } from 'react'
import './AddNote.css'
import { Link } from 'react-router-dom'
import NoteContext from '../../NoteContext';


export default class AddNote extends Component {
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.addNoteName(event.target['noteName'].value)
        this.props.addNoteContent(event.target['noteContent'].value)
    }

    render() {
    return (
        <form className='AddNote' onSubmit={event => this.handleSubmit(event)}>
            <Link to='/'>Back</Link>
            <h3>Create a note</h3>
            <label htmlFor='noteName'>Name</label>
            <input type='text' name='noteName' id='noteName'></input>
            <br />
            <label htmlFor='contentName'>Content</label>
            <input type='text' name='noteContent' id='noteContent' ></input>
            <p>Folder</p>
            <NoteContext.Consumer>
            {(value) => {
            return (
                    <select>
                        {value.folders.map(folders => <option key={folders.id}>{folders.name}</option>)}
                    </select>
            )
            }}
            </NoteContext.Consumer>
            <button>Add Note</button>
        </form>
    )
    }
}