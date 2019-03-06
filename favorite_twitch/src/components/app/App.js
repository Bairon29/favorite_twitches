import React, { Component } from 'react';
import './App.css';

import { getVideosBy } from './utils/APICalls';

class App extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    getVideosBy('game_id', 33214);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
