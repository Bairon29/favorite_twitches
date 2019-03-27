import React, { Component } from 'react';
import  './App.css';

import { getStreams, offline_getStreams } from '../redux/actions/VideoActions';
import OptionList from './page_sessions/option_list/OptionList';
import SearchOption from './page_sessions/search/SearchOption';
import FeaturedVideo from './page_sessions/featured_video/FeaturedVideo';
import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: null,
      featured: null,
      pagination: '',
      games_pagination: '',
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
  
    // this.props.getStreams(40, this.state.pagination);
  
  this.props.offline_getStreams();
}

  render() {
    return (
      <div className="App">
        <FeaturedVideo />
        <SearchOption />
        <OptionList />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      videos: state.videos.videos,
      featured: state.videos.featured,
      message: state.videos.message,
      pagination: state.videos.pagination,
      games_pagination: state.videos.games_pagination,
      isLoading: state.videos.isLoading
  }
}

export default connect(mapStateToProps, {getStreams, offline_getStreams})(App);
