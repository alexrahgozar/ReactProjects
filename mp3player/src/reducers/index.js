import { combineReducers } from "redux";
const songReducer = () => {
  return [
    { title: "Thank U, Next", duration: "4:22" },
    { title: "Girls Like you", duration: "4:05" },
    { title: "Better Now", duration: "4:44" },
    { title: "Mo Bamba", duration: "3:57" },
    { title: "Taki Taki", duration: "2:59" }
  ];
};

const selectedSongReducer = (selecteSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selecteSong;
};

export default combineReducers({
  Song: songReducer,
  selectedSong: selectedSongReducer
});
