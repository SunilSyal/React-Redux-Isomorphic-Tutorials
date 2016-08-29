export const selectSong = (songId) => {
    return {
        type: 'SONG_SELECTED',
        payload: songId
    }
};
