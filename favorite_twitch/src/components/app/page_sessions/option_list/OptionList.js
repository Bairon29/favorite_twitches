import React, { Component } from 'react';
import OptionItem from './option_item/OptionItem'

import { getVideosBy } from '../../../redux/actions/VideoActions';
import { connect } from 'react-redux';

import data from './data'

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
    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.videos!==prevState.videos){
    //         console.log('life cycle',nextProps.videos, prevState)
    //         return {videos: nextProps.videos};
    // }
    // else return null;
    // }

//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         // Are we adding new items to the list?
//         // Capture the scroll position so we can adjust scroll later.
//         if (!prevProps.videos) {
//             console.log('life cycle',prevProps.videos, prevState)
//             return this.props.videos;
//         }
//         return null;
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(prevProps.videos!==this.props.videos){
//           //Perform some operation here
//           this.setState({videos: this.props.videos});
//         //   this.classMethod();
//         }
//       }
//   shouldComponentUpdate(nextProps, nextState){
//       return this.state.videos !== nextState.videos;
//   }
    componentWillReceiveProps(nextProps){
        if(nextProps.videos!==this.state.videos){
            this.setState({
                videos: nextProps.videos
            })
        }
    }
  shouldLoadTemple(){
      console.log('viiidd',this.props.videos)
      if(this.state.videos){
        return <OptionItem data={this.state.videos} />
      } else{
          return <h1>Loading..</h1>
      }
  }

    componentDidMount(){
        this.props.getVideosBy('game_id', 33214);
    // this.setState({
    //     videos: data['data']
    // });
    // console.log(data['data'],'after', this.state.videos)
    }
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

export default connect(mapStateToProps, {getVideosBy})(OptionList);