import React, { Component } from 'react';
// import OptionItem from './option_item/OptionItem'
import './SearchOption.css';
import searchIcon from '../../images/search.png';

// import { getVideosBy } from '../../../redux/actions/VideoActions';
// import { connect } from 'react-redux';

class SearchOption extends Component {
  constructor(){
    super();
    this.state = {
        videos: null,
        message: '',
        isLoading: false
    }
    this.wasEnterPress = this.wasEnterPress.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e){
    var text = this.refs['search'].value;
    console.log(text);
  }

  wasEnterPress(e){
    if(e.key === 'Enter'){
      this.handleSearch(e);
    }
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-bar">
            <input type="text" ref="search" 
                name="search" 
                onKeyPress={this.wasEnterPress}
                placeholder="Search for: User Name | Stream Title | Game Title" />
            <div className="search-icon" onClick={this.handleSearch}>
              <img src={searchIcon} />
            </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//         videos: state.videos.videos,
//         message: state.videos.message,
//         isLoading: state.videos.isLoading
//     }
//   }

export default SearchOption;