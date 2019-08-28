import React from 'react'
import './Note.css'
import { Link } from 'react-router-dom'
import NoteContext from '../../../NoteContext';


export default function Note() {

    // const noteArray = props.notes.filter(note => note.id === props.match.params.noteId);
    // const note = noteArray[0]
    // const folder = props.folders.filter(folder => folder.id === props.match.params.folderId)
    
    
    
    return (
        <NoteContext.Consumer>
            {(value) => {
                const noteArray = value.notes.filter(note => note.id === value.noteId);
                const note = noteArray[0]
                const folder = value.folders.filter(folder => folder.id === value.folderId)
                console.log(noteArray)
            return (
                <div className='Note'>
                <li className='IndvNote' key={note.id}>
                        <Link to={`folder/${folder.id}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
                        <p className='NoteDate'>{note.modified}</p>
                        <button className='DeleteNoteButton'>Delete Note</button>
                    </li>
                <p className='NoteContent'>{note.content}</p>
                
            </div>
            )
            }}
        </NoteContext.Consumer>
    )
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