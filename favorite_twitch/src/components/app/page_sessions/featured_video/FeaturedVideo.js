import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { getVideosBy } from '../../utils/APICalls';

class FeaturedVideo extends Component {
  constructor(){
    super();
    this.state = {
        featured: null,
        message: '',
        isLoading: true
    }
    this.shouldLoadTemple = this.shouldLoadTemple.bind(this);
  }

  shouldLoadTemple(){
      console.log('featued',this.props.featured)
      if(this.props.featured){
        var item = this.props.featured;
        return (
          <div>
            <h1>Featured Video</h1>
            <h1>{item.user_name}</h1>
            <h2>{item.title}</h2>
            <a href={item.url} >Watch Now!</a>
            <img src={item.thumbnail_url} alt="thumbnail url" />
          </div>
        );
      } else{
          return <h1>Loading..</h1>
      }
  }
  render() {
    return (
      <div className="featured-video">
        {this.shouldLoadTemple()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      featured: state.videos.featured,
      message: state.videos.message,
      isLoading: state.videos.isLoading
  }
}

export default connect(mapStateToProps)(FeaturedVideo);
