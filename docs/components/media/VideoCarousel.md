# VideoCarousel Component

## Overview

The `VideoCarousel` component is an interactive video carousel that displays multiple videos with smooth transitions, progress indicators, and playback controls. It features GSAP animations, scroll-triggered playback, and responsive design.

## Features

- ✅ **Interactive carousel** - Smooth video transitions with GSAP animations
- ✅ **Progress indicators** - Visual progress bars for each video
- ✅ **Playback controls** - Play, pause, and replay functionality
- ✅ **Scroll-triggered** - Videos play when scrolled into view
- ✅ **Responsive design** - Adapts to desktop, tablet, and mobile screens
- ✅ **Smooth animations** - GSAP-powered transitions and effects
- ✅ **Accessibility** - Keyboard navigation and screen reader support

## Installation

The component is already included in your project at:
```
src/components/VideoCarousel.jsx
```

## Basic Usage

### Default Usage
```jsx
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <div>
      <VideoCarousel />
    </div>
  );
}
```

### With Custom Styling
```jsx
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <div className="bg-black">
      <VideoCarousel />
    </div>
  );
}
```

## Component Structure

### Main Sections
1. **Video Container** - Main video display area
2. **Progress Indicators** - Visual progress bars for each video
3. **Control Buttons** - Play, pause, and replay controls
4. **Video Slider** - Smooth sliding transitions between videos

### Video States
- **Loading** - Video is loading
- **Playing** - Video is currently playing
- **Paused** - Video is paused
- **Ended** - Video has finished playing

## Props

This component doesn't accept any props. It uses internal state and refs for video management.

## Dependencies

### Required Imports
```jsx
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
```

### External Dependencies
- **GSAP** - Animation library for smooth transitions
- **ScrollTrigger** - GSAP plugin for scroll-based animations
- **React** - React hooks and components

## State Management

### Video State
```jsx
const [video, setVideo] = useState({
  isEnd: false,
  startPlay: false,
  videoId: 0,
  isLastVideo: false,
  isPlaying: false,
});
```

### Loaded Data State
```jsx
const [loadedData, setLoadedData] = useState([]);
```

## Styling

### CSS Classes

#### Main Container
```css
relative flex-center w-full h-full
```

#### Video Container
```css
flex-center relative w-full h-full
```

#### Progress Indicators
```css
flex-center absolute top-5 left-0 w-full gap-1
```

#### Control Buttons
```css
flex-center absolute bottom-10 left-10 w-[91px] h-[91px] rounded-full bg-white/25 backdrop-blur-sm border border-white/25
```

## Animations

### GSAP Animations

#### Slider Animation
```jsx
gsap.to("#slider", {
  transform: `translateX(${-100 * videoId}%)`,
  duration: 2,
  ease: "power2.inOut",
});
```

#### Video Animation
```jsx
gsap.to("#video", {
  scrollTrigger: {
    trigger: "#video",
    toggleActions: "restart none none none",
  },
  onComplete: () => {
    setVideo((pre) => ({
      ...pre,
      startPlay: true,
      isPlaying: true,
    }));
  },
});
```

#### Progress Bar Animation
```jsx
gsap.to(span[videoId], {
  onUpdate: () => {
    const progress = Math.ceil(anim.progress() * 100);
    if (progress != currentProgress) {
      currentProgress = progress;
      gsap.to(videoDivRef.current[videoId], {
        width: window.innerWidth < 760 ? "10vw" : window.innerWidth < 1200 ? "10vw" : "4vw",
      });
      gsap.to(span[videoId], {
        width: `${currentProgress}%`,
        backgroundColor: "white",
      });
    }
  },
});
```

## Video Controls

### Play/Pause Functionality
```jsx
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
    case "play":
      setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
      break;
    case "pause":
      setVideo((pre) => ({ ...pre, isPlaying: false }));
      break;
  }
};
```

### Progress Tracking
```jsx
const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);
```

## Implementation Details

### Component Structure
```jsx
const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  useGSAP(() => {
    // GSAP animations setup
  }, [isEnd, videoId]);

  useEffect(() => {
    // Progress tracking setup
  }, [videoId, isPlaying]);

  return (
    <section id="highlights" className="w-full h-full common-padding bg-black">
      {/* Video carousel content */}
    </section>
  );
};
```

### Video Rendering
```jsx
{hightlightsSlides.map((list, i) => (
  <li key={list.id} id={`slider-${list.id}`} className="relative sm:w-[70vw] w-[88vw] min-w-[250px]">
    <div className="video-carousel_container">
      <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
        <video
          id="video"
          playsInline={true}
          className={`${list.id === 2 && "translate-x-44"} pointer-events-none`}
          muted
          ref={(el) => (videoRef.current[i] = el)}
          onEnded={() => (i !== 3 ? handleProcess("video-end", i) : handleProcess("video-last"))}
          onPlay={() => setVideo((pre) => ({ ...pre, isPlaying: true }))}
          onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
        >
          <source src={list.video} type="video/mp4" />
        </video>
      </div>
    </div>
  </li>
))}
```

## Best Practices

1. **Video optimization** - Use compressed video files for faster loading
2. **Performance** - Optimize GSAP animations for smooth playback
3. **Accessibility** - Ensure all controls are keyboard accessible
4. **Mobile optimization** - Test on mobile devices for proper playback
5. **User experience** - Provide clear visual feedback for interactions

## Troubleshooting

### Common Issues

1. **Videos not playing** - Check if video files exist and are accessible
2. **Animations not working** - Ensure GSAP and ScrollTrigger are properly imported
3. **Mobile issues** - Test on actual mobile devices
4. **Performance issues** - Optimize video file sizes and formats

### Debug Mode

To debug video issues, add console logs:
```jsx
const handleProcess = (type, i) => {
  console.log('Video process:', type, i);
  
  switch (type) {
    case "video-end":
      setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
      break;
    // ... rest of cases
  }
};
```

## Integration Examples

### With Navigation
```jsx
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <div>
      <Navbar />
      <VideoCarousel />
    </div>
  );
}
```

### With Custom Styling
```jsx
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
      <VideoCarousel />
    </div>
  );
}
```

## Performance Considerations

- **Video optimization** - Compress videos for faster loading
- **GSAP optimization** - Efficient animation library with minimal overhead
- **ScrollTrigger** - Optimized scroll-based animations
- **Memory management** - Proper cleanup of video resources

## Browser Support

- **Modern browsers** - Full support for video playback and GSAP
- **Mobile browsers** - Optimized for mobile video playback
- **Accessibility** - Screen reader and keyboard navigation support

## Future Enhancements

### Potential Improvements
1. **Video preloading** - Preload next video for smoother transitions
2. **Custom controls** - Add custom video player controls
3. **Video quality** - Add quality selection options
4. **Fullscreen mode** - Add fullscreen video playback
5. **Video analytics** - Track video engagement metrics

### Video Preloading
```jsx
// Example video preloading
const preloadVideo = (videoSrc) => {
  const video = document.createElement('video');
  video.src = videoSrc;
  video.preload = 'metadata';
};
```

## Contributing

To modify the VideoCarousel component:

1. Edit `src/components/VideoCarousel.jsx`
2. Update the documentation in this file
3. Test video playback and animations
4. Ensure accessibility standards are met

## License

This component is part of the Arenda website project and follows the same licensing terms. 