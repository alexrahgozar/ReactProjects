import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Please select a song:</div>;
  }
  return (
    <div className="">
      <h3> Details for:</h3>
      <p>
        Title: {mySelectedSong.title}
        <br />
        Duration: {mySelectedSong.duration}
      </p>
    </div>
  );
};

const myState = state => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(myState)(SongDetail);
