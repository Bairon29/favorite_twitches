import { GOT_VIDEOS, GOT_GAMES } from '../actionTypes/Types';
import { setImageResolution } from '../../app/utils/RegexHelper';
import { getMostViewStreams } from '../../app/utils/GetHelper';
import { IMAGE_RESOLUSION } from '../../app/utils/Constant'
import offline_data from '../../app/page_sessions/data';
//https://api.twitch.tv/helix/streams?first=40
//https://api.twitch.tv/helix/videos?${category}=${id}
export const getStreams = (amount, pagination) => (dispatch) => {
    let url = "";
    if(pagination === "" || pagination.length < 1){
      url = `https://api.twitch.tv/helix/streams?first=${amount}`
    } else {
      url = `https://api.twitch.tv/helix/streams?first=${amount}after=${pagination}`
    }
    fetch(url,{
      method: 'GET',
      headers: {
        'Client-ID': process.env.REACT_APP_CLIENT_ID
      }
    }).then(res => res.json()).then(data => {
      console.log('Data twitch: ', data['data'])
      var arr_data = data['data'];
      var pagi = data['pagination'];
      for(let i = 0; i < arr_data.length; i++){
        if(arr_data[i]['thumbnail_url']){
          arr_data[i]['thumbnail_url'] = setImageResolution(arr_data[i]['thumbnail_url'], IMAGE_RESOLUSION);
        }
      }
      var streams = getMostViewStreams(arr_data);
      dispatch({
        type: GOT_VIDEOS,
        videos: streams.regular,
        featured: streams.featured,
        pagination: pagi,
        message: 'Data Loaded'
      })
    })
}

export const offline_getStreams = () => (dispatch) => {
  console.log('Offline twitch: ', offline_data['data'])
  var arrOffline_data = offline_data['data'];
  for(let i = 0; i < arrOffline_data.length; i++){
    if(arrOffline_data[i]['thumbnail_url']){
      arrOffline_data[i]['thumbnail_url'] = setImageResolution(arrOffline_data[i]['thumbnail_url'], IMAGE_RESOLUSION);
    }
  }

  var streams = getMostViewStreams(arrOffline_data);
  var pagi = offline_data['pagination'];
  dispatch({
    type: GOT_VIDEOS,
    videos: streams.regular,
    featured: streams.featured,
    pagination: pagi,
    message: 'Data Loaded'
  })
}

//https://api.twitch.tv/helix/games/top?first=20&after=eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ

export const getTopGames = (amount, pagination) => (dispatch) => {
  let url = "";
  if(pagination === "" || pagination.length < 1){
    url = `https://api.twitch.tv/helix/games/top?first=${amount}`
  } else {
    url = `https://api.twitch.tv/helix/games/top?first=${amount}after=${pagination}`
  }
  fetch(url,{
    method: 'GET',
    headers: {
      'Client-ID': process.env.REACT_APP_CLIENT_ID
    }
  }).then(res => res.json()).then(data => {
    console.log('Data twitch: ', data['data'])
    var arr_data = data['data'];
    var pagi = data['pagination'];
    for(let i = 0; i < arr_data.length; i++){
      if(arr_data[i]['box_art_url']){
        arr_data[i]['box_art_url'] = setImageResolution(arr_data[i]['box_art_url'], IMAGE_RESOLUSION);
      }
    }
    var streams = getMostViewStreams(arr_data);
    dispatch({
      type: GOT_GAMES,
      videos: streams.regular,
      featured: streams.featured,
      games_pagination: pagi,
      message: 'Data Loaded'
    })
  })
}