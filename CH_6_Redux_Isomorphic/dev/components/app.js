import React, {Component} from 'react';
import PlayList from './playList';
import SongInfo from './songInfo';

export default class App extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
          <div>
              <h2>Select a song</h2>
              <PlayList />
              <SongInfo />
          </div>
        );
    }
}
