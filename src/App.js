import React, { Component } from 'react';
import './App.css';
import FolderList from './Components/FolderList/FolderList'
import NoteList from './Components/NoteList/NoteList'
import AddFolder from './Components/AddFolder/AddFolder'
import dummyStore from './dummy-store'
import AddNote from './Components/AddNote/AddNote'
import { Route, Link } from 'react-router-dom'
import Note from './Components/NoteList/Note/Note'
import SideNote from './Components/SideNote/SideNote'
import NoteContext from './NoteContext'



class App extends Component {
  state = {
      folders: dummyStore.folders,
      notes: dummyStore.notes
  };
  
    
  

  componentDidMount() {
    this.setState(dummyStore);
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes
    }
    
      return (
        <NoteContext.Provider value={contextValue}>
        <div className="App">
            <Link to='/' className='AppHeader'>Noteful</Link>
          <div className='ListsContainer'>
            <nav className='AppNav'>
              <Route exact path='/' component={FolderList}/>
              <Route path='/folder/:folderId' component={FolderList}/>
              {/* <Route path='/folder/:folderId/:noteId' component={SideNote} /> */}
            </nav>
            <main className='AppMain'>
              <Route exact path='/' component={NoteList} />
              <Route exact path='/folder/:folderId' component={NoteList} />
              <Route path='/folder/:folderId/:noteId' component={Note} />
              {/* <Route path='/AddFolder' component={AddFolder} />
              <Route path='/AddNote' component={AddNote} /> */}
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
