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
        <Search/>
      </div>
    );
  }
}

export default App;
