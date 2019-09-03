import React, { Component } from 'react'
import './NoteList.css'
import { Link } from 'react-router-dom'
import NoteContext from '../../NoteContext';


export default class NoteList extends Component {
    static contextType = NoteContext;
    
    handleDeleteNote = (event, noteId) => {
        event.preventDefault();
        
        console.log(noteId)
        
        
        fetch(`http://localhost:9090/notes${noteId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
        .then(response => response.json())
        .then(response => this.context.deleteNote(response))
      }
    
    render() {
       
        
                const notes = this.context.notes.filter(note => note.folderId === this.props.match.params.folderId);
                const folderArray = this.context.folders.filter(folder => folder.id === this.props.match.params.folderId);
                const folder = folderArray[0]
                
    return (
           <div>
                <section className='NoteList'>
                    <ul>
                        {folder ? notes.map(notes =>
                            <li key={notes.id}>
                                <Link 
                                    to={`/folder/${folder.id}/${notes.id}`}  
                                    className='NoteHeader'>{notes.name}
                                </Link>
                                <p className='NoteDate'>{notes.modified}</p>
                                <button 
                                    className='DeleteNoteButton' 
                                    onClick={e => this.handleDeleteNote(e, notes.id)}>
                                        Delete Note
                                </button>
                            </li>) 
                            :
                           this.context.notes.map(notes =>
                            <li key={notes.id}>
                                <Link 
                                    to={`/folder/${notes.folderId}/${notes.id}`}  
                                    className='NoteHeader'>{notes.name}
                                </Link>
                                <p className='NoteDate'>{notes.modified}</p>
                                    <button 
                                        className='DeleteNoteButton'
                                        onClick={e => this.handleDeleteNote(e, notes.id)}>
                                            Delete Note
                                    </button>
                            </li>)
                        }
                        </ul>
                        <Link to='/AddNote'>Add Note</Link>
                </section>    
            </div>
    )
    }
}



// export default function NoteList(props) {
//     const note = props.notes.filter(note => note.folderId === props.match.params.folderId);
//     const folderArray = props.folders.filter(folder => folder.id === props.match.params.folderId);
//     const folder = folderArray[0];

    
//    return (
//        <section className='NoteList'>
//            <ul>
//            {folder ? note.map(note =>
//                 <li key={note.id}>
//                    <Link to={`/folder/${folder.id}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
//                    <p className='NoteDate'>{note.modified}</p>
//                    <button className='DeleteNoteButton'>Delete Note</button>
//                </li>) :
//                props.notes.map(note =>
//                <li key={note.id}>
//                    <Link to={`/folder/${props.match.params.folderId}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
//                    <p className='NoteDate'>{note.modified}</p>
//                        <button className='DeleteNoteButton'>Delete Note</button>
//                </li>)
//              }
//            </ul>
//            <Link to='/AddNote'>Add Note</Link>
//        </section>
//    )
// }