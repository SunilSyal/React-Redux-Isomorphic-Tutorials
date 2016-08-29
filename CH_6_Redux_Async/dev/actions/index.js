var axios = require('axios');

export const selectSong = (songId) => {
  return {
    type: 'SONG_SELECTED',
    payload: songId
  }
};

export const fetchPlaylist = () => {
  return axios.get('./data/playList.json')
    .then(function(response) {
      return {
        type: 'FETCH_PLAYLIST',
        payload: response.data.payload
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
