# BeltOfCollabs Component

## Overview

The `BeltOfCollabs` component is a scrolling marquee that displays collaboration logos in a continuous horizontal animation. It creates a dynamic belt of partner/university logos that scrolls infinitely across the screen.

## Features

- ✅ **Infinite scroll** - Continuous horizontal scrolling animation
- ✅ **Responsive design** - Adapts to different screen sizes with clamp()
- ✅ **Dynamic sizing** - Different logo sizes based on position
- ✅ **Smooth animation** - CSS-based marquee animation
- ✅ **Performance optimized** - Efficient CSS animations
- ✅ **Accessibility** - Proper alt text for images

## Installation

The component is already included in your project at:
```
src/components/BeltOfCollabs.jsx
```

## Basic Usage

### Default Usage
```jsx
import BeltOfCollabs from './components/BeltOfCollabs';

function App() {
  return (
    <div>
      <BeltOfCollabs />
    </div>
  );
}
```

### With Custom Styling
```jsx
import BeltOfCollabs from './components/BeltOfCollabs';

function App() {
  return (
    <div className="bg-black py-8">
      <BeltOfCollabs />
    </div>
  );
}
```

## Component Structure

### Main Elements
1. **Marquee Container** - Main scrolling container with animation
2. **Logo Images** - Repeated logo images with varying sizes
3. **Animation** - CSS-based infinite scroll animation

### Logo Sizing Logic
- **Large logos** (index % 3 === 0): `clamp(70px, 12vw, 90px)`
- **Medium logos** (index % 3 === 1): `clamp(40px, 8vw, 48px)`
- **Small logos** (index % 3 === 2): `clamp(55px, 9vw, 64px)`

## Props

This component doesn't accept any props. It uses internal logic for logo generation and sizing.

## Dependencies

### Required Imports
```jsx
import React from 'react';
```

### External Dependencies
- **React** - React components
- **CSS** - Custom CSS animations and styling

## Styling

### CSS Classes

#### Main Container
```css
flex items-center justify-around
```

#### Marquee Animation
```css
/* Custom CSS animation defined in index.css */
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

### Inline Styles

#### Container Styles
```jsx
{
  width: '200%',
  animation: '35s linear 0s infinite normal none running marquee',
  display: 'flex',
  gap: 'clamp(1rem, 3vw, 2rem)',
  alignItems: 'center',
}
```

#### Logo Styles
```jsx
{
  height: index % 3 === 0
    ? 'clamp(70px, 12vw, 90px)'
    : index % 3 === 1
    ? 'clamp(40px, 8vw, 48px)'
    : 'clamp(55px, 9vw, 64px)',
  objectFit: 'contain',
  filter: 'brightness(0.95) contrast(1.1)',
  margin: '0 auto',
  display: 'block',
}
```

## Animation Details

### Marquee Animation
```css
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

### Animation Properties
- **Duration**: 35 seconds
- **Timing**: Linear (constant speed)
- **Iteration**: Infinite
- **Direction**: Normal (left to right)
- **Fill mode**: None

## Implementation Details

### Component Structure
```jsx
const BeltOfCollabs = () => {
  return (
    <div
      id="belt-of-collabs"
      className="flex items-center justify-around"
      style={{
        width: '200%',
        animation: '35s linear 0s infinite normal none running marquee',
        display: 'flex',
        gap: 'clamp(1rem, 3vw, 2rem)',
        alignItems: 'center',
      }}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <img
          key={index}
          src="/assets/images/react.svg"
          alt="University Logo"
          style={{
            height:
              index % 3 === 0
                ? 'clamp(70px, 12vw, 90px)'
                : index % 3 === 1
                ? 'clamp(40px, 8vw, 48px)'
                : 'clamp(55px, 9vw, 64px)',
            objectFit: 'contain',
            filter: 'brightness(0.95) contrast(1.1)',
            margin: '0 auto',
            display: 'block',
          }}
        />
      ))}
    </div>
  );
};
```

### Logo Generation
```jsx
{Array.from({ length: 12 }).map((_, index) => (
  <img
    key={index}
    src="/assets/images/react.svg"
    alt="University Logo"
    style={{
      height: getLogoHeight(index),
      objectFit: 'contain',
      filter: 'brightness(0.95) contrast(1.1)',
      margin: '0 auto',
      display: 'block',
    }}
  />
))}
```

## Best Practices

1. **Performance** - Use CSS animations for smooth scrolling
2. **Responsive design** - Use clamp() for responsive sizing
3. **Accessibility** - Provide proper alt text for images
4. **Optimization** - Optimize logo images for web
5. **User experience** - Ensure smooth animation performance

## Troubleshooting

### Common Issues

1. **Animation not working** - Check if CSS animation is properly defined
2. **Logos not displaying** - Verify image paths are correct
3. **Performance issues** - Optimize image sizes and formats
4. **Mobile issues** - Test responsive design on actual devices

### Debug Mode

To debug animation issues, add console logs:
```jsx
const BeltOfCollabs = () => {
  console.log('Rendering BeltOfCollabs with 12 logos');
  
  return (
    // Component JSX
  );
};
```

## Integration Examples

### With Navigation
```jsx
import Navbar from './components/Navbar';
import BeltOfCollabs from './components/BeltOfCollabs';

function App() {
  return (
    <div>
      <Navbar />
      <BeltOfCollabs />
    </div>
  );
}
```

### With Custom Styling
```jsx
import BeltOfCollabs from './components/BeltOfCollabs';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
      <div className="py-8">
        <BeltOfCollabs />
      </div>
    </div>
  );
}
```

## Performance Considerations

- **CSS animations** - Hardware-accelerated animations for smooth performance
- **Image optimization** - Optimize logo images for web
- **Memory management** - Efficient rendering with React
- **Responsive design** - Use clamp() for optimal sizing

## Browser Support

- **Modern browsers** - Full support for CSS animations and clamp()
- **Mobile browsers** - Optimized for mobile performance
- **Accessibility** - Screen reader and keyboard navigation support

## Future Enhancements

### Potential Improvements
1. **Dynamic logos** - Load logos from API or configuration
2. **Pause on hover** - Pause animation when user hovers
3. **Click interactions** - Add click handlers for logo links
4. **Custom timing** - Allow custom animation duration
5. **Logo categories** - Group logos by category or type

### Dynamic Logo Loading
```jsx
// Example dynamic logo loading
const [logos, setLogos] = useState([]);

useEffect(() => {
  // Load logos from API or configuration
  const loadLogos = async () => {
    const response = await fetch('/api/logos');
    const logoData = await response.json();
    setLogos(logoData);
  };
  
  loadLogos();
}, []);
```

### Pause on Hover
```jsx
const [isPaused, setIsPaused] = useState(false);

const handleMouseEnter = () => setIsPaused(true);
const handleMouseLeave = () => setIsPaused(false);

return (
  <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      animationPlayState: isPaused ? 'paused' : 'running',
    }}
  >
    {/* Logo content */}
  </div>
);
```

## Contributing

To modify the BeltOfCollabs component:

1. Edit `src/components/BeltOfCollabs.jsx`
2. Update the documentation in this file
3. Test animation performance and responsive design
4. Ensure accessibility standards are met

## License

This component is part of the Arenda website project and follows the same licensing terms. 