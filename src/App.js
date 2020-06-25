import React, { Component } from 'react';
import './App.css';
import Search from './search';

class App extends Component {
  render() {
    return (
      <div>
        <div className="head">
          <h1>Neflix Finder</h1>
        </div>
        < Search />
        </div>
    );
  }
}

export default App;
