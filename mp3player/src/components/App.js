import React from "react";
import SongListClick from "./SongListClick";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div
      style={{
        marginTop: "5%",
        padding: "25px",
        border: "25px solid #BD081C",
        width: "300px",
        backgroundColor: "#dfe3ee",
        borderRadius: "5px"
      }}
      className="ui container grid"
    >
      <h1>MP3player</h1>
      <div className="ui row">
        <div className="column eight wide">
          <SongListClick />
        </div>
        <div style={{ fontSize: "20px" }} className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
