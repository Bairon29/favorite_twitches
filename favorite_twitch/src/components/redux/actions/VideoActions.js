import { GOT_VIDEOS } from '../actionTypes/Types';
import { setImageResolution } from '../../app/utils/RegexHelper';
import { getMostViewStreams } from '../../app/utils/GetHelper';
import { IMAGE_RESOLUSION } from '../../app/utils/Constant'
import offline_data from '../../app/page_sessions/data';
//https://api.twitch.tv/helix/streams?first=40
//https://api.twitch.tv/helix/videos?${category}=${id}
export const getStreams = (category, id) => (dispatch) => {
    fetch(`https://api.twitch.tv/helix/streams?first=40`,{
      method: 'GET',
      headers: {
        'Client-ID': process.env.REACT_APP_CLIENT_ID
      }
    }).then(res => res.json()).then(data => {
      console.log('Data twitch: ', data['data'])
      var arr_data = data['data'];
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

  dispatch({
    type: GOT_VIDEOS,
    videos: streams.regular,
    featured: streams.featured,
    message: 'Data Loaded'
  })
}