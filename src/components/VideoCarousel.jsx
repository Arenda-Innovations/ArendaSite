import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";



import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import VideoSlide from "./VideoSlide";
import ProgressDots from "./ProgressDots";
import VideoControls from "./VideoControls";




const VideoCarousel = () => {
  const containerRef = useRef(null);
  const sliderTrackRef = useRef(null);
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const slideRef = useRef([]);

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
        const targetSlide = slideRef.current[videoId];
        const offsetLeft = targetSlide ? targetSlide.offsetLeft : 0;

        gsap.to(sliderTrackRef.current, {
          x: -offsetLeft,
          duration: 0.8,
          ease: "power2.inOut",
          overwrite: "auto",
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
          <VideoSlide
            key={list.id}
            list={list}
            index={i}
            onSlideRef={(el) => (slideRef.current[i] = el)}
            onVideoRef={(el) => (videoRef.current[i] = el)}
            onEnded={(idx) =>
              idx !== 3
                ? handleProcess("video-end", idx)
                : handleProcess("video-last")
            }
            onPlay={() => setVideo((pre) => ({ ...pre, isPlaying: true }))}
            onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
          />
        ))}
      </div>

      <div className="relative flex-center mt-10 gap-4">
        <ProgressDots
          count={videoRef.current.length}
          getDivRef={(i, el) => (videoDivRef.current[i] = el)}
          getSpanRef={(i, el) => (videoSpanRef.current[i] = el)}
        />
        <VideoControls
          isLastVideo={isLastVideo}
          isPlaying={isPlaying}
          images={{ replayImg, playImg, pauseImg }}
          onReset={() => handleProcess("video-reset")}
          onPlay={() => handleProcess("play")}
          onPause={() => handleProcess("pause")}
        />
      </div>
    </div>
  );
};

export default VideoCarousel;