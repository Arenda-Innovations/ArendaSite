import React from "react";

const VideoSlide = ({
  list,
  index,
  onSlideRef,
  onVideoRef,
  onEnded,
  onPlay,
  onLoadedMetadata,
}) => {
  return (
    <div className="sm:pr-20 pr-10" ref={onSlideRef}>
      <div className="video-carousel_container w-screen h-screen relative">
        <div className="w-full h-full flex-center rounded-none overflow-hidden bg-black">
          <video
            playsInline
            className={`${list.id === 2 && "translate-x-44"} pointer-events-none w-full h-full object-cover `}
            preload="metadata"
            muted
            ref={onVideoRef}
            onEnded={() => onEnded(index)}
            onPlay={onPlay}
            onLoadedMetadata={onLoadedMetadata}
          >
            <source src={list.video} type="video/mp4" />
          </video>
        </div>

        <div className="absolute top-12 left-[5%] z-10">
          {list.textLists.map((text, idx) => (
            <p key={idx} className="md:text-2xl text-xl font-medium">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSlide;


