import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Search extends Component {
  render () {
    return (
      <div style={{
        'align-items': 'center',
        'justify-content': 'center'
      }}>
        <input type="text" placeholder="Search By Tags" style={{
          'border': 'none',
          'border-bottom': '2px solid #eee',
          'padding': '10px',
          'text-align': 'center',
          'background': 'transparent'
        }}/>
      </div>
    )
  }
}

class Results extends Component {
  render() {
    return (
      <div class="flex-grid">
        <div class="col">
          <img src="https://static.pexels.com/photos/867483/pexels-photo-867483.jpeg"/>
          <img src="https://static.pexels.com/photos/867483/pexels-photo-867483.jpeg"/>
          <img src="https://static.pexels.com/photos/867483/pexels-photo-867483.jpeg"/>
        </div>
        <div class="col">
          <img src="https://static.pexels.com/photos/867483/pexels-photo-867483.jpeg"/>
          <img src="https://static.pexels.com/photos/867483/pexels-photo-867483.jpeg"/>
          <img src="https://static.pexels.com/photos/867483/pexels-photo-867483.jpeg"/>
        </div>
        <div class="col">
          <img src="https://static.pexels.com/photos/867483/pexels-photo-867483.jpeg"/>
          <img src="https://static.pexels.com/photos/867483/pexels-photo-867483.jpeg"/>
          <img src="https://static.pexels.com/photos/867483/pexels-photo-867483.jpeg"/>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: ''
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.user
          ?
            <Search/>
          :
          // <button onClick={() => {window.location = window.location.href.includes('localhost')
          //   ? 'http://localhost:8888/login'
          //   : 'http://nu-playlist-backend.herokuapp.com/login'}}
          // style={
          //   {
          //     'fontSize': '20px',
          //     'padding': '20px',
          //     'background': 'transparent',
          //     'border': 'none',
          //     'borderBottom' : '2px solid',
          //     'cursor': 'pointer'}
          // }>Sign In With Instagram</button>
          <Results/>
        }
      </div>
    );
  }
}

export default App;
