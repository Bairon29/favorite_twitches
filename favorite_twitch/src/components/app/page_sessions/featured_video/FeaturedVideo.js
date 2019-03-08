import React, { Component } from 'react';


// import { getVideosBy } from '../../utils/APICalls';

class FeaturedVideo extends Component {
  constructor(){
    super();
    this.state = {
        games: null
    }
  }

  componentDidMount(){
    // getVideosBy('game_id', 33214).then(data => {
    //     this.setState({
    //         games: data
    //     })
    // });
  }
  render() {
    return (
      <div className="featured-video">
        
      </div>
    );
  }
}

export default FeaturedVideo;
