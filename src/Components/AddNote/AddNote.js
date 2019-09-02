import React, { Component } from 'react'
import './AddNote.css'
import { Link } from 'react-router-dom'
import NoteContext from '../../NoteContext';


export default class AddNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFolder: {
                name: '',
                id: ''
            }
        }
    }
    static contextType = NoteContext;
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNoteName(event.target['noteName'].value)
        this.props.addNoteContent(event.target['noteContent'].value)
        const name = (event.target['noteName'].value)
        const content = (event.target['noteContent'].value)
        const folderId = this.state.selectedFolder.value
        console.log('folderId is', folderId)
        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: name,
                content: content,
                modified: new Date().toISOString(),
                folderId: folderId
              })
        })
        
    }

    selectFolder = (event) => {
        const { value } = event.target
        this.setState({
            selectedFolder: {
                id: value
            }
        })
        console.log(value)
        
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
            <select value={this.state.selectedFolder.name} name='selectedFolder' onChange={this.selectFolder}>
                {this.context.folders.map(folders => <option name='folderTarget' key={folders.id} value={folders.id} >{folders.name}</option>)}
            </select>
           
            <button>Add Note</button>
        </form>
    )
    }
}