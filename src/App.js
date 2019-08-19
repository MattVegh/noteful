import React, { Component } from 'react';
import './App.css';
import FolderList from './Components/FolderList/FolderList'
import NoteList from './Components/NoteList/NoteList'
import AddFolder from './Components/AddFolder/AddFolder'
import dummyStore from './dummy-store'
import AddNote from './Components/AddNote/AddNote'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: [],
      notes: []
  };
  }
    
  

  componentDidMount() {
    this.setState(dummyStore);
    console.log(this.state.folders)
    console.log(this.state.notes)
  }

  render() {
      return (
        <div className="App">
            <h1 className='AppHeader'>Noteful</h1>
          <div className='ListsContainer'>
            <nav className='AppNav'>
              <FolderList folders={this.state.folders}/>
            </nav>
            <main className='AppMain'>
              {/* when on main page show NoteList and FolderList*/}
              <NoteList notes={this.state.notes} /> 
              {/* when add folder clicked, show AddFolder */}
              <AddFolder />
              {/* when add note clicked, show add note */}
              <AddNote />
            </main>
          </div>
        </div>
      );
    
  }
  
}

export default App;
