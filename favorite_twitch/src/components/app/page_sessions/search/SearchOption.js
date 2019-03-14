import React, { Component } from 'react';
// import OptionItem from './option_item/OptionItem'
import './SearchOption.css';
import './w3.css';

// import { getVideosBy } from '../../../redux/actions/VideoActions';
// import { connect } from 'react-redux';

class SearchOption extends Component {
  constructor(){
    super();
    this.state = {
        videos: null,
        message: '',
        isLoading: true
    }
    this.OnChange = this.OnChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e){

  }

  OnChange(e){

  }

  render() {
    return (
      <div className="search-container">
        <div className="search-bar">
            <input type="search" ref="search" 
                name="search" 
                placeholder="Search for: User Name | Stream Title | Game Title" />
            <div className="w3-padding w3-xlarge w3-teal">
                <i className="fa fa-search w3-text-black"></i>
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