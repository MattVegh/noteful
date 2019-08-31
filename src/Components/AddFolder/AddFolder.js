import React, { Component } from 'react'
import './AddFolder.css'
import { Link } from 'react-router-dom'

export default class AddFolder extends Component {
    

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addFolder(event.target['folderName'].value)
    }
    
    render() {
    return (
        <form className='AddFolder' onSubmit={this.handleSubmit}>
            <Link to='/'>Back</Link>
            <h3>Create a folder</h3>
            <label htmlFor='folderName'>Folder Name</label>
            <input type='text' name='folderName' id='folderName' ></input>
            <button>Add Folder</button>
        </form>
    )
    
    }
}