import React, { Component } from 'react';
import OptionItem from './option_item/OptionItem'

// import { getVideosBy } from '../../../redux/actions/VideoActions';
import { connect } from 'react-redux';

// import data from '../data'

class OptionList extends Component {
  constructor(){
    super();
    this.state = {
        videos: null,
        message: '',
        isLoading: true
    }
    this.shouldLoadTemple = this.shouldLoadTemple.bind(this);
  }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.videos!==this.state.videos){
    //         this.setState({
    //             videos: nextProps.videos
    //         })
    //     }
    // }
  shouldLoadTemple(){
      console.log('viiidd',this.props.videos)
      if(Object.keys(this.props.videos).length > 0){
        return <OptionItem data={this.props.videos} />
      } else{
          return <h1>Loading..</h1>
      }
  }

    // componentDidMount(){
    //     // this.props.getVideosBy('game_id', 33214);
    //   this.setState({
    //       videos: data['data']
    //   });
    // // console.log(data['data'],'after', this.state.videos)
    // }
  render() {
    return (
      <div className="option-video">
        {this.shouldLoadTemple()}
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

export default connect(mapStateToProps)(OptionList);