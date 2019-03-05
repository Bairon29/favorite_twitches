import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    fetch('https://api.twitch.tv/helix/videos?game_id=33214',{
      method: 'GET',
      headers: {
        'Client-ID': '6j17igflcyzr8nvlsz7hr2mevu8vcp'
      }
    }).then(res => res.json()).then(data => {
      console.log(data);
    })
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
