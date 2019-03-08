import React, { Component } from 'react';

import  './App.css';

import { getVideosBy, offline_getVideosBy } from '../redux/actions/VideoActions';
import OptionList from './page_sessions/option_list/OptionList';
import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: null,
      message: '',
      isLoading: true
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.videos!==this.state.videos){
        this.setState({
            videos: nextProps.videos
        })
    }
}

componentDidMount(){
    // this.props.getVideosBy('game_id', 33214);
  // this.setState({
  //     videos: data['data']
  // });
  
  this.props.offline_getVideosBy();
}

  render() {
    return (
      <div className="App">
        <OptionList />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      videos: state.videos.videos,
      message: state.videos.message,
      isLoading: state.videos.isLoading
  }
}

export default connect(mapStateToProps, {getVideosBy, offline_getVideosBy})(App);
