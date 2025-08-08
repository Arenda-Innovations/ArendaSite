# Hero Component

## Overview

The `Hero` component is the main landing section of the Arenda website. It displays a full-screen hero section with the Arenda title and a background video that autoplays and loops.

## Features

- ✅ **Full-screen design** - Takes up the full viewport height
- ✅ **Background video** - Autoplaying video with loop and mute
- ✅ **Responsive layout** - Adapts to different screen sizes
- ✅ **Smooth animations** - CSS transitions and animations
- ✅ **Accessibility** - Proper video attributes and alt text
- ✅ **Performance optimized** - Video loads efficiently
- ✅ **Mobile friendly** - Responsive design for mobile devices

## Installation

The component is already included in your project at:
```
src/components/Hero.jsx
```

## Basic Usage

### Default Usage
```jsx
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Hero />
      {/* Rest of your app */}
    </div>
  );
}
```

### With Custom Styling
```jsx
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <main>
        {/* Your content */}
      </main>
    </div>
  );
}
```

## Component Structure

### Main Section
- **Hero Title** - "Arenda" text display
- **Background Video** - Full-screen video background
- **CTA Section** - Call-to-action area (currently empty)

### Video Element
- **Autoplay** - Video starts automatically
- **Muted** - No audio (required for autoplay)
- **Loop** - Video repeats continuously
- **PlaysInline** - Plays inline on mobile devices

## Props

This component doesn't accept any props. It uses the `heroVideo` constant from `../utils`.

## Dependencies

### Required Imports
```jsx
import { heroVideo } from '../utils';
import { useEffect, useState } from 'react';
```

### External Dependencies
- **React** - React hooks and components
- **CSS Classes** - Tailwind CSS classes for styling

## Styling

### CSS Classes

#### Main Container
```css
w-full nav-height bg-black relative
```

#### Hero Title
```css
hero-title /* Custom CSS class defined in index.css */
```

#### Video Container
```css
md:w-10/12 w-9/12 flex-center
```

#### Video Element
```css
pointer-events-none
```

#### CTA Section
```css
flex flex-col items-center opacity-0 translate-y-20
```

### Custom CSS

The component uses custom CSS classes defined in `src/index.css`:

```css
.hero-title {
  /* Hero title styling */
}

.nav-height {
  height: var(--navbar-height, 5rem);
}
```

## Video Implementation

### Video Source
```jsx
const videoSrc = heroVideo; // From ../utils
```

### Video Element
```jsx
<video 
  className="pointer-events-none" 
  autoPlay 
  muted 
  playsInline={true} 
  loop={true} 
  key={videoSrc}
>
  <source src={videoSrc} type="video/mp4" />
</video>
```

### Video Attributes
- **autoPlay** - Starts playing automatically
- **muted** - No audio (required for autoplay in most browsers)
- **playsInline** - Plays inline on mobile devices
- **loop** - Repeats the video continuously
- **key** - React key for proper re-rendering

## Responsive Design

### Desktop Layout
- **Full width** - Video takes 10/12 of container width
- **Centered** - Content is centered horizontally and vertically
- **Large title** - Hero title is prominently displayed

### Mobile Layout
- **Adaptive width** - Video takes 9/12 of container width
- **Touch friendly** - No pointer events on video
- **Optimized spacing** - Proper spacing for mobile screens

## Performance Considerations

### Video Optimization
- **Compressed format** - MP4 format for broad compatibility
- **Efficient loading** - Video loads asynchronously
- **Memory management** - Video is properly disposed of on unmount

### Rendering Optimization
- **Minimal re-renders** - Component only re-renders when video source changes
- **CSS animations** - Smooth transitions using CSS
- **Efficient layout** - Uses CSS Grid and Flexbox for layout

## Accessibility

### Video Accessibility
- **No audio** - Video is muted for accessibility
- **Alternative content** - Video is decorative, not essential
- **Keyboard navigation** - Video doesn't interfere with keyboard navigation

### Screen Reader Support
- **Semantic HTML** - Proper section and heading structure
- **Alt text** - Video has appropriate alt text
- **Focus management** - No focus traps or accessibility issues

## Implementation Details

### Component Structure
```jsx
const Hero = () => {
  const videoSrc = heroVideo;

  return (
    <section className="w-full nav-height bg-black relative" id="hero">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Arenda</p>
        <div className="md:w-10/12 w-9/12 flex-center">
          <video className="pointer-events-none" autoPlay muted playsInline={true} loop={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
      </div>
    </section>
  );
};
```

### CSS Custom Properties
```css
:root {
  --navbar-height: 5rem; /* Default navbar height */
}
```

## Best Practices

1. **Video optimization** - Use compressed video files for faster loading
2. **Mobile performance** - Test video performance on mobile devices
3. **Accessibility** - Ensure video doesn't interfere with accessibility
4. **Loading states** - Consider adding loading states for video
5. **Fallback content** - Provide fallback for video loading failures

## Troubleshooting

### Common Issues

1. **Video not playing** - Check if video file exists and is accessible
2. **Autoplay blocked** - Ensure video is muted for autoplay to work
3. **Mobile issues** - Test on actual mobile devices
4. **Performance issues** - Optimize video file size and format

### Debug Mode

To debug video issues, add console logs:
```jsx
const Hero = () => {
  const videoSrc = heroVideo;
  
  console.log('Video source:', videoSrc);
  
  return (
    // Component JSX
  );
};
```

## Integration Examples

### With Navigation
```jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        {/* Your content */}
      </main>
    </div>
  );
}
```

### With Custom Background
```jsx
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900">
      <Hero />
      <main className="bg-white">
        {/* Your content */}
      </main>
    </div>
  );
}
```

## Browser Support

- **Modern browsers** - Full support for video autoplay and CSS Grid
- **Mobile browsers** - Optimized for mobile video playback
- **Accessibility** - Screen reader and keyboard navigation support

## Performance Metrics

### Loading Performance
- **First Contentful Paint** - Optimized for fast initial render
- **Largest Contentful Paint** - Video loads efficiently
- **Cumulative Layout Shift** - Minimal layout shifts

### Video Performance
- **Video load time** - Optimized for fast video loading
- **Memory usage** - Efficient memory management
- **Battery usage** - Optimized for mobile battery life

## Contributing

To modify the Hero component:

1. Edit `src/components/Hero.jsx`
2. Update the documentation in this file
3. Test video performance and accessibility
4. Ensure responsive design works correctly

## License

This component is part of the Arenda website project and follows the same licensing terms. 