# Navbar Component

## Overview

The `Navbar` component is the main navigation component for the Arenda website. It provides a responsive navigation bar with mobile menu support, smooth transitions, and dynamic height adjustments.

## Features

- ✅ **Responsive design** - Adapts to desktop and mobile screens
- ✅ **Mobile menu** - Hamburger menu with smooth animations
- ✅ **Dynamic height** - Adjusts navbar height based on mobile menu state
- ✅ **Smooth transitions** - All animations use CSS transitions
- ✅ **Accessibility** - Proper ARIA attributes and keyboard navigation
- ✅ **Backdrop blur** - Modern glassmorphism effect
- ✅ **Fixed positioning** - Stays at the top of the viewport
- ✅ **Logo integration** - Displays Arenda logo with link to home

## Installation

The component is already included in your project at:
```
src/components/Navbar.jsx
```

## Basic Usage

### Default Usage
```jsx
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      {/* Rest of your app */}
    </div>
  );
}
```

### With Custom Styling
```jsx
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20"> {/* Account for fixed navbar */}
        {/* Your content */}
      </main>
    </div>
  );
}
```

## Component Structure

### Desktop Navigation
- **Logo** - Arenda logo on the left
- **Navigation Links** - Centered navigation items
- **Mobile Menu Button** - Hidden on desktop

### Mobile Navigation
- **Logo** - Arenda logo on the left
- **Hamburger Menu** - Three-line menu button
- **Dropdown Menu** - Full-screen mobile menu overlay

## Props

This component doesn't accept any props. It uses internal state and the `navLists` constant from `../constants`.

## State Management

### Internal State
```jsx
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

### State Effects
- **Mobile menu toggle** - Controls hamburger menu animation
- **Navbar height** - Dynamically adjusts CSS custom property
- **Menu visibility** - Controls mobile menu dropdown

## Navigation Links

The component automatically renders navigation links based on the `navLists` constant:

| Navigation Item | Route Path | Type |
|----------------|------------|------|
| `Home` | `/` | React Router Link |
| `Contact` | `/contact` | React Router Link |
| `Founders` | `/founder` | React Router Link |
| `A.I.` | `/ai` | React Router Link |
| `Engineering` | `/engineering` | React Router Link |
| `Social Impact` | `/social-impact` | React Router Link |

## Styling

### CSS Classes

#### Main Container
```css
fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-b from-zinc-900/90 to-transparent shadow-md transition-all duration-300
```

#### Navigation Links
```css
/* Desktop */
px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all

/* Mobile */
px-8 py-4 text-lg cursor-pointer text-gray-500 hover:text-white transition-all border-b border-gray-700 last:border-b-0
```

#### Mobile Menu Button
```css
sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 relative
```

### Custom Properties

The component uses CSS custom properties for dynamic height adjustment:

```css
:root {
  --navbar-height: 5rem; /* Default height */
}
```

## Mobile Menu Animation

### Hamburger to X Animation
```jsx
// Top line
<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>

// Middle line
<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>

// Bottom line
<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
```

### Menu Dropdown Animation
```jsx
<div className={`sm:hidden overflow-hidden transition-all duration-300 bg-black/95 backdrop-blur-md ${
  isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
}`}>
```

## Accessibility

### ARIA Attributes
- `aria-label="Toggle mobile menu"` - Mobile menu button
- `aria-expanded={isMobileMenuOpen}` - Menu state
- `aria-controls="mobile-menu"` - Associated menu
- `role="dialog"` - Mobile menu dialog
- `aria-modal="true"` - Modal dialog
- `aria-label="Mobile navigation menu"` - Menu description

### Keyboard Navigation
- **Tab navigation** - All interactive elements are keyboard accessible
- **Enter/Space** - Activate mobile menu button
- **Escape** - Close mobile menu (handled by React Router)

## Implementation Details

### useEffect Hook
```jsx
useEffect(() => {
  const root = document.documentElement;
  if (isMobileMenuOpen) {
    root.style.setProperty('--navbar-height', '24rem');
  } else {
    root.style.setProperty('--navbar-height', '5rem');
  }

  return () => {
    root.style.setProperty('--navbar-height', '5rem');
  };
}, [isMobileMenuOpen]);
```

### Navigation Link Rendering
```jsx
const renderNavLink = (nav, isMobile = false) => {
  const baseClasses = "px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all";
  const mobileClasses = "px-8 py-4 text-lg cursor-pointer text-gray-500 hover:text-white transition-all border-b border-gray-700 last:border-b-0";
  
  const classes = isMobile ? mobileClasses : baseClasses;
  
  // Route mapping logic...
};
```

## Best Practices

1. **Fixed positioning** - Always account for the fixed navbar in your layout
2. **Mobile-first** - Test on mobile devices to ensure good UX
3. **Accessibility** - Ensure all navigation is keyboard accessible
4. **Performance** - The component is optimized for minimal re-renders
5. **Consistency** - Use consistent styling with the rest of the app

## Troubleshooting

### Common Issues

1. **Navbar overlapping content** - Add `pt-20` or `pt-[var(--navbar-height)]` to your main content
2. **Mobile menu not working** - Check if `navLists` constant is properly imported
3. **Styling conflicts** - Ensure no conflicting CSS is overriding navbar styles
4. **Accessibility issues** - Test with screen readers and keyboard navigation

### Debug Mode

To debug navigation issues, add console logs to the navigation functions:
```jsx
const closeMobileMenu = () => {
  console.log('Closing mobile menu');
  setIsMobileMenuOpen(false);
};
```

## Integration Examples

### With React Router
```jsx
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main className="pt-20">
          {/* Your routes */}
        </main>
      </div>
    </BrowserRouter>
  );
}
```

### With Custom Styling
```jsx
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20 text-white">
        {/* Your content */}
      </main>
    </div>
  );
}
```

## Performance Considerations

- **Minimal re-renders** - Component only re-renders when mobile menu state changes
- **CSS transitions** - Smooth animations using CSS instead of JavaScript
- **Efficient state management** - Single state variable for mobile menu
- **Optimized rendering** - Conditional rendering for mobile menu

## Browser Support

- **Modern browsers** - Full support for backdrop-blur and CSS custom properties
- **Mobile browsers** - Optimized for touch interactions
- **Accessibility** - Screen reader and keyboard navigation support

## Contributing

To modify the Navbar component:

1. Edit `src/components/Navbar.jsx`
2. Update the documentation in this file
3. Test mobile responsiveness and accessibility
4. Ensure all navigation links work correctly

## License

This component is part of the Arenda website project and follows the same licensing terms. 