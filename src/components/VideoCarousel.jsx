import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";



import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";




const VideoCarousel = () => {
  const containerRef = useRef(null);
  const sliderTrackRef = useRef(null);
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  // video and indicator
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(
    () => {
      if (sliderTrackRef.current) {
        gsap.to(sliderTrackRef.current, {
          xPercent: -100 * videoId,
          duration: 2,
          ease: "power2.inOut",
        });
      }

      const currentVideoEl = videoRef.current[videoId];
      if (currentVideoEl) {
        ScrollTrigger.create({
          trigger: currentVideoEl,
          toggleActions: "restart none none none",
          onEnter: () => {
            setVideo((pre) => ({ ...pre, startPlay: true, isPlaying: true }));
          },
        });
      }
    },
    { scope: containerRef, dependencies: [isEnd, videoId] }
  );

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animation to move the indicator
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get the progress of the video
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            // set the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw" // mobile
                  : window.innerWidth < 1200
                  ? "10vw" // tablet
                  : "4vw", // laptop
            });

            // set the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      // update the progress bar
      const animUpdate = () => {
        const videoEl = videoRef.current[videoId];
        if (!videoEl) return; 

        const durationFallback =
          hightlightsSlides[videoId]?.videoDuration || videoEl.duration || 1;
        const currentTime = videoEl.currentTime || 0;
        anim.progress(currentTime / durationFallback);
      };

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }

      // ensure ticker is cleaned up when effect re-runs or unmounts
      return () => {
        gsap.ticker.remove(animUpdate);
      };
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      const currentVideo = videoRef.current[videoId];
      if (!currentVideo) return;

      if (!isPlaying) {
        currentVideo.pause();
      } else {
        if (startPlay) currentVideo.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // Pause/resume video when page/tab visibility changes
  useEffect(() => {
    const onVisibility = () => {
      const currentVideo = videoRef.current[videoId];
      if (!currentVideo) return;
      if (document.hidden) {
        currentVideo.pause();
      } else if (isPlaying && startPlay) {
        currentVideo.play();
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [videoId, isPlaying, startPlay]);

  // vd id is the id for every video until id becomes number 3
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

  return (
    <div id="video-carousel" ref={containerRef}>
      <div className="flex items-center" ref={sliderTrackRef}>
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} className="sm:pr-20 pr-10">
            <div className="video-carousel_container w-screen h-screen relative">
              <div className="w-full h-full flex-center rounded-none overflow-hidden bg-black">
                <video
                  playsInline={true}
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none w-full h-full object-cover `}
                  preload="metadata"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            className="w-10 h-10"
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;