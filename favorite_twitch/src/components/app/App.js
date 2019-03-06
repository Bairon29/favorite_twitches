import React, { Component } from 'react';
import './App.css';

import OptionList from './page_sessions/option_list/OptionList'
// import { getVideosBy } from './utils/APICalls';

class App extends Component {
  // constructor(){
  //   super();
  // }

  // componentDidMount(){
  //   getVideosBy('game_id', 33214);
  // }
  render() {
    return (
      <div className="App">
        <OptionList />
      </div>
    );
  }
}

export default App;
