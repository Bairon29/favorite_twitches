export const getVideosBy = (category, id) => {
    fetch(`https://api.twitch.tv/helix/videos?${category}=${id}`,{
      method: 'GET',
      headers: {
        'Client-ID': process.env.REACT_APP_CLIENT_ID
      }
    }).then(res => res.json()).then(data => {
      console.log(data);
    })
}