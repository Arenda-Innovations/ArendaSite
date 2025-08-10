import React from "react";

const VideoControls = ({ isLastVideo, isPlaying, images, onReset, onPlay, onPause }) => {
  const { replayImg, playImg, pauseImg } = images;
  const src = isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg;
  const alt = isLastVideo ? "replay" : !isPlaying ? "play" : "pause";
  const onClick = isLastVideo ? onReset : !isPlaying ? onPlay : onPause;

  return (
    <button className="control-btn">
      <img src={src} alt={alt} className="w-10 h-10" onClick={onClick} />
    </button>
  );
};

export default VideoControls;


