import React, { Component } from 'react';
import './App.css';
import FolderList from './Components/FolderList/FolderList'
import NoteList from './Components/NoteList/NoteList'
import AddFolder from './Components/AddFolder/AddFolder'
import dummyStore from './dummy-store'
import AddNote from './Components/AddNote/AddNote'
import { Route, Link } from 'react-router-dom'
import Note from './Components/NoteList/Note/Note'
import Folder from './Components/FolderList/Folder/Folder'



class App extends Component {
  state = {
      folders: dummyStore.folders,
      notes: dummyStore.notes
  };
  
    
  

  componentDidMount() {
    this.setState(dummyStore);
    console.log(this.state.folders)
    console.log(this.state.notes)
  }

  render() {
      return (
        <div className="App">
            <Link to='/' className='AppHeader'>Noteful</Link>
          <div className='ListsContainer'>
            <nav className='AppNav'>
              <Route exact path='/' render={() => (<FolderList folders={this.state.folders} /> )}/>
            </nav>
            <main className='AppMain'>
              {/* when on main page show NoteList and FolderList*/}
              <Route exact path='/' render={() => (<NoteList notes={this.state.notes} />  )}/>
              
              <Route path='/AddFolder' component={AddFolder} />
              {/* when add note clicked, show add note */}
              <Route path='/AddNote' component={AddNote} />
              {/* <Route path='/note/:noteId' component={({ match }) => <Note notes={this.state.notes} match={match} />} /> */}
              <Route path='/note/:noteId' component={(props) => <Note {...props} notes={this.state.notes} />} />
              <Route path='/folder/:folderId' component={(props) => <Folder {...props} folders={this.state.folders} />} />
            </main>
          </div>
        </div>
      );
    
  }
  
}

export default App;
