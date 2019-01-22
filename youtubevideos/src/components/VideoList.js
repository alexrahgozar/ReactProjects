import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ myVideos, onVideoSelect }) => {
  const listOfVideos = myVideos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        singleVideo={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{listOfVideos}</div>;
};

export default VideoList;
