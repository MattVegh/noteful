import React, { Component } from 'react'
import './Note.css'
import { Link } from 'react-router-dom'
import NoteContext from '../../../NoteContext';


export default class Note extends Component {
    static contextType = NoteContext;
    
    // handleDeleteNote = (event) => {
    //     console.log(event.target.parents('li').getAttribute('key'))
    //     const notes = event.target;
    //     fetch(`http://localhost:9090/notes${notes.id}`, {
    //       method: 'DELETE',
    //       headers: {
    //         'content-type': 'application/json'
    //       },
    //     })
    //     .then(response =>
    //       response.json().then(json => {
    //         return json;
    //       }))
    //   }


    render() {
        const noteArray = this.context.notes.filter(note => note.id === this.props.match.params.noteId);
        const note = noteArray[0]
        const folder = this.context.folders.filter(folder => folder.id === this.props.match.params.folderId)
    return (
        <div className='Note'>
            <li className='IndvNote' key={note.id}>
                    <Link to={`folder/${folder.id}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
                    <p className='NoteDate'>{note.modified}</p>
                    <button className='DeleteNoteButton' onClick={this.handleDeleteNote}>Delete Note</button>
            </li>
            <p className='NoteContent'>{note.content}</p>
            
        </div>
    )
}
}


// export default function Note() {

//     const noteArray = props.notes.filter(note => note.id === props.match.params.noteId);
//     const note = noteArray[0]
//     const folder = props.folders.filter(folder => folder.id === props.match.params.folderId)
    
    
    
//     return (
//         <div className='Note'>
//             <li className='IndvNote' key={note.id}>
//                     <Link to={`folder/${folder.id}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
//                     <p className='NoteDate'>{note.modified}</p>
//                     <button className='DeleteNoteButton'>Delete Note</button>
//                 </li>
//             <p className='NoteContent'>{note.content}</p>
            
//         </div>
//     )
// }