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
            <input type="text" ref="search" 
                name="search" 
                placeholder="Search for: User Name | Stream Title | Game Title" />
            <div className="search-icon">
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