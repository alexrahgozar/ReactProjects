import React, { Component } from "react";
import { connect } from "react-redux";
import { TheSelectSong } from "../actions";

class SongListClick extends Component {
  renderList() {
    return this.props.Songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.mySelectSong(song)}
              className="ui button primary"
            >
              Select Song
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// my state is the store
const myState = state => {
  return { Songs: state.Song };
};

// connect is the dispatcher
export default connect(
  myState,
  {
    mySelectSong: TheSelectSong
  }
)(SongListClick);
