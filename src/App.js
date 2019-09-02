import React, { Component } from 'react';
import './App.css';
import FolderList from './Components/FolderList/FolderList'
import NoteList from './Components/NoteList/NoteList'
import AddFolder from './Components/AddFolder/AddFolder'
import AddNoteError from './Components/AddNote/AddNoteError'
import AddNote from './Components/AddNote/AddNote'
import { Route, Link } from 'react-router-dom'
import Note from './Components/NoteList/Note/Note'
import SideNote from './Components/SideNote/SideNote'
import NoteContext from './NoteContext'



class App extends Component {
  state = {
      folders: [],
      notes: []
  };
  
    
  

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:9090/notes`),
      fetch(`http://localhost:9090/folders`)
  ])
      .then(([notesRes, foldersRes]) => {
          if (!notesRes.ok)
              return notesRes.json().then(e => Promise.reject(e));
          if (!foldersRes.ok)
              return foldersRes.json().then(e => Promise.reject(e));

          return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
          this.setState({notes, folders});
      })
      .catch(error => {
          console.error({error});
      });
  }

  handleDeleteNote() {
    const notes = this.state.notes;
    fetch(`http://localhost:9090/notes${notes.id}`, {
      method: 'DELETE',
    })
    .then(console.log(this.state.notes))
  }


  addFolder = (folderName) => {
    this.setState({folders: [...this.state.folders, {name: folderName}]})
    console.log(this.state.folders)

}
  addNoteName = (noteName) => {
    this.setState({notes: [...this.state.notes, {name: noteName}]})
  }

  addNoteContent = (noteContent) => {
    this.setState({notes: [...this.state.notes, {content: noteContent}]})
  }


  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      handleDeleteNote: this.handleDeleteNote
    }
    
    console.log(contextValue)
      return (
        <NoteContext.Provider value={contextValue} >
        <div className="App">
            <Link to='/' className='AppHeader'>Noteful</Link>
          <div className='ListsContainer'>
            <nav className='AppNav'>
              <Route exact path='/' component={FolderList}/>
              <Route exact path='/folder/:folderId' component={FolderList}/>
              <Route exact path='/folder/:folderId/:noteId' component={SideNote} />
            </nav>
            <main className='AppMain'>
              <Route exact path='/' component={NoteList} />
              <Route exact path='/folder/:folderId' component={NoteList} />
              <Route path='/folder/:folderId/:noteId' component={Note} />
              <Route path='/AddFolder' component={() => {return <AddFolder addFolder={this.addFolder}/>}} />
              <AddNoteError>
                <Route path='/AddNote' component={() => {return <AddNote addNoteName={this.addNoteName} addNoteContent={this.addNoteContent}/>}} />
              </AddNoteError>
              
            </main>
          </div>
        </div>
        </NoteContext.Provider>


    //     <div className="App">
    //     <Link to='/' className='AppHeader'>Noteful</Link>
    //   <div className='ListsContainer'>
    //     <nav className='AppNav'>
    //       <Route exact path='/' render={() => (<FolderList folders={this.state.folders} /> )}/>
    //       <Route path='/folder/:folderId' render={() => (<FolderList folders={this.state.folders} /> )}/>
    //       <Route path='/folder/:folderId/:noteId'  render={(props) => (<SideNote {...props} notes={this.state.notes} folders={this.state.folders} /> )} />
    //     </nav>
    //     <main className='AppMain'>
    //       <Route exact path='/' render={(props) => (<NoteList {...props} notes={this.state.notes} folders={this.state.folders} />  )}/>
    //       <Route exact path='/folder/:folderId' render={(props) => (<NoteList {...props} notes={this.state.notes} folders={this.state.folders} /> )}/>
    //       <Route 
    //         path='/folder/:folderId/:noteId' 
    //         render={(props) => (<Note {...props} notes={this.state.notes} folders={this.state.folders}/>)}
    //        />
    //       <Route path='/AddFolder' component={AddFolder} />
    //       <Route path='/AddNote' component={AddNote} />
    //     </main>
    //   </div>
    // </div>


      );
    
  }
  
}

export default App;
