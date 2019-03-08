import { GOT_VIDEOS } from '../actionTypes/Types'

import data from '../../app/page_sessions/data';

export const getVideosBy = (category, id) => (dispatch) => {
    fetch(`https://api.twitch.tv/helix/videos?${category}=${id}`,{
      method: 'GET',
      headers: {
        'Client-ID': process.env.REACT_APP_CLIENT_ID
      }
    }).then(res => res.json()).then(data => {
      console.log('Data twitch: ', data['data'])
      dispatch({
        type: GOT_VIDEOS,
        videos: data['data'],
        message: 'Data Loaded'
      })
    })
}

export const offline_getVideosBy = () => (dispatch) => {
  console.log('Offline twitch: ', data['data'])
  dispatch({
    type: GOT_VIDEOS,
    videos: data['data'],
    message: 'Data Loaded'
  })
}