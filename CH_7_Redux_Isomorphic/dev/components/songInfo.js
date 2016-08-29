import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongInfo extends Component {

    getSelectedSong (list, id) {
        for(var i in list){
            if (list[i].id == id) {
              return list[i];
            }
        }
    }

    render() {
        if (!this.props.selectedSongID) {
            return (<div>Select a song...</div>);
        }

        var selectedSong = this.getSelectedSong (this.props.songs, this.props.selectedSongID);

        return (
            <div>
                <h2>Playing now: {selectedSong.title}</h2>
                <iframe width="560" height="315" src={selectedSong.link + "?autoplay=1"} ></iframe>
                <h3>Composer - {selectedSong.composer}</h3>
            </div>
        );
    }
}

function fetchMyProps(state) {
    return {
        selectedSongID: state.selectedSongID,
        songs: state.songs
    };
}

export default connect(fetchMyProps)(SongInfo);
