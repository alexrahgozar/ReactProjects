import "./VideoItem.css";
import React from "react";

const VideoItem = ({ singleVideo, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(singleVideo)} className="video-item item">
      <img
        alt={singleVideo.snippet.title}
        className="ui image"
        src={singleVideo.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{singleVideo.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
