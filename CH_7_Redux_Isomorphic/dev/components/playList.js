import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectSong} from '../actions/index'


class PlayList extends Component {

    renderPlayList() {
        return this.props.songs.map((song) => {
            return (
                <li
                    key={song.id}
                    onClick={() => this.props.selectSong(song.id)}>

                    {song.id} : {song.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderPlayList()}
            </ul>
        );
    }
}

function stateToProps(state) {
    return {
        songs: state.songs
    };
}

function dispatchToProps(dispatch){
    return bindActionCreators({selectSong: selectSong}, dispatch);
}

export default connect(stateToProps, dispatchToProps)(PlayList);
