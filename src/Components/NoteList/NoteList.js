import React, { Component } from 'react'
import './NoteList.css'
import { Link } from 'react-router-dom'
import NoteContext from '../../NoteContext';

export default class NoteList extends Component {
    static contextType = NoteContext;
    
    render() {
        console.log(NoteContext)
    return (
        
        <NoteContext.Consumer>
            
            {(value) => {
                const note = value.notes.filter(note => note.folderId === value.folderId);
                const folderArray = value.folders.filter(folder => folder.id === value.folderId);
                const folder = folderArray[0];
                // console.log(note)
                // console.log(folderArray)
                // console.log(folder)
                return (
                    <section className='NoteList'>
                        <ul>
                        {folder ? note.map(note =>
                            <li key={note.id}>
                                <Link to={`/folder/${folder.id}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
                                <p className='NoteDate'>{note.modified}</p>
                                <button className='DeleteNoteButton'>Delete Note</button>
                            </li>) :
                            value.notes.map(note =>
                            <li key={note.id}>
                                <Link to={`/folder/${value.folderId}/${note.id}`}  className='NoteHeader'>{note.name}</Link>
                                <p className='NoteDate'>{note.modified}</p>
                                    <button className='DeleteNoteButton'>Delete Note</button>
                            </li>)
                        }
                        </ul>
                        <Link to='/AddNote'>Add Note</Link>
                    </section>
                )
            }}
        </NoteContext.Consumer>
        
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