# NavigationRouter Component Documentation

## Overview

The `NavigationRouter` component is a **universal wrapper component** that can be used on any div or content to add navigation functionality. It wraps content and makes it clickable for navigation, providing a clean and reusable way to add navigation to any element in your application.

## Features

- ✅ **Universal wrapper** - Can wrap any content and make it navigable
- ✅ **Simple API** - Clean, intuitive props for easy integration
- ✅ **Route navigation** - Accepts route prop for automatic navigation
- ✅ **Custom callbacks** - Supports custom onNavigate functions
- ✅ **Flexible styling** - Accepts custom CSS classes
- ✅ **Accessibility friendly** - Proper cursor states and click targets
- ✅ **Performance optimized** - Minimal overhead and efficient rendering

## Installation

The component is already included in your project at:
```
src/components/NavigationRouter.jsx
```

## Current Implementation

The NavigationRouter is currently implemented in the **ResearchPage** component, where it wraps the three research boxes at the bottom of the page:

- **Advanced Engineering** box - Wrapped with NavigationRouter, navigates to `/engineering`
- **Artificial Intelligence** box - Wrapped with NavigationRouter, navigates to `/ai`  
- **Systems & Society** box - Wrapped with NavigationRouter, navigates to `/social-impact`

Each box is wrapped with NavigationRouter and includes glowing hover effects.

## Basic Usage

### Wrapper Usage (Recommended)
```jsx
import NavigationRouter from './components/NavigationRouter';

function MyComponent() {
  return (
    <NavigationRouter route="/ai">
      <div className="my-content">
        <h3>AI Projects</h3>
        <p>Click me to go to AI page</p>
      </div>
    </NavigationRouter>
  );
}
```

### With Custom Callback
```jsx
import NavigationRouter from './components/NavigationRouter';

function MyComponent() {
  const handleNavigation = () => {
    console.log('User navigated to AI page!');
    // Add your custom logic here
  };

  return (
    <NavigationRouter 
      route="/ai" 
      onNavigate={handleNavigation}
    >
      <div className="ai-box">
        <h3>Artificial Intelligence</h3>
        <p>Explore AI projects</p>
      </div>
    </NavigationRouter>
  );
}
```

### Without Route (Just Styling)
```jsx
import NavigationRouter from './components/NavigationRouter';

function MyComponent() {
  return (
    <NavigationRouter className="my-wrapper">
      <div>Regular content</div>
    </NavigationRouter>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **Required** | Child components to wrap |
| `route` | `string` | `null` | Route to navigate to when clicked |
| `onNavigate` | `function` | `undefined` | Callback function when navigation occurs |
| `className` | `string` | `''` | Additional CSS classes |
| `disabled` | `boolean` | `false` | Whether navigation is disabled |

## Examples

### Card Navigation
```jsx
import NavigationRouter from './components/NavigationRouter';

function CardGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <NavigationRouter route="/engineering">
        <div className="bg-blue-500 p-6 rounded-lg hover:scale-105 transition-transform">
          <h3 className="text-white font-bold">Engineering</h3>
          <p className="text-white/80">Advanced engineering projects</p>
        </div>
      </NavigationRouter>
      
      <NavigationRouter route="/ai">
        <div className="bg-purple-500 p-6 rounded-lg hover:scale-105 transition-transform">
          <h3 className="text-white font-bold">AI</h3>
          <p className="text-white/80">Artificial intelligence research</p>
        </div>
      </NavigationRouter>
      
      <NavigationRouter route="/social-impact">
        <div className="bg-pink-500 p-6 rounded-lg hover:scale-105 transition-transform">
          <h3 className="text-white font-bold">Social Impact</h3>
          <p className="text-white/80">Technology for good</p>
        </div>
      </NavigationRouter>
    </div>
  );
}
```

### Button Navigation
```jsx
import NavigationRouter from './components/NavigationRouter';

function ActionButtons() {
  return (
    <div className="flex gap-4">
      <NavigationRouter route="/contact">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </NavigationRouter>
      
      <NavigationRouter route="/founder">
        <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Meet Our Founders
        </button>
      </NavigationRouter>
    </div>
  );
}
```

### Image Navigation
```jsx
import NavigationRouter from './components/NavigationRouter';

function ImageGallery() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <NavigationRouter route="/ai">
        <div className="relative group cursor-pointer">
          <img 
            src="/ai-image.jpg" 
            alt="AI Research" 
            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <h3 className="text-white font-bold">AI Research</h3>
          </div>
        </div>
      </NavigationRouter>
    </div>
  );
}
```

### Disabled Navigation
```jsx
import NavigationRouter from './components/NavigationRouter';

function ConditionalNavigation() {
  const isUserLoggedIn = false; // Example condition
  
  return (
    <NavigationRouter 
      route={isUserLoggedIn ? "/dashboard" : null}
      disabled={!isUserLoggedIn}
    >
      <div className={`p-4 rounded-lg ${isUserLoggedIn ? 'bg-green-500 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}>
        <h3>Dashboard</h3>
        <p>{isUserLoggedIn ? 'Click to access' : 'Login required'}</p>
      </div>
    </NavigationRouter>
  );
}
```

## NavigationLinks Component

For backward compatibility and specific navigation link use cases, the original NavigationRouter functionality is available as `NavigationLinks`:

```jsx
import { NavigationLinks } from './components/NavigationRouter';

function Header() {
  return (
    <header className="bg-black p-4">
      <NavigationLinks variant="default" />
    </header>
  );
}
```

### NavigationLinks Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `string` | `'default'` | Visual variant: `'default'`, `'minimal'`, `'card'` |
| `showActive` | `boolean` | `true` | Whether to highlight the active route |
| `className` | `string` | `''` | Additional CSS classes |
| `onNavigate` | `function` | `undefined` | Callback function when navigation occurs |
| `mobileFriendly` | `boolean` | `true` | Whether to include mobile-friendly styles |
| `route` | `string` | `null` | Optional route to navigate to when outer div is clicked |

## Routing Map

The component automatically maps navigation items to routes:

| Navigation Item | Route Path |
|----------------|------------|
| `Home` | `/` |
| `Contact` | `/contact` |
| `Founders` | `/founder` |
| `A.I.` | `/ai` |
| `Engineering` | `/engineering` |
| `Social Impact` | `/social-impact` |

## ResearchPage Implementation

The NavigationRouter is currently implemented in the ResearchPage component at `src/components/ResearchPage.jsx`. It wraps three styled boxes at the bottom of the page:

1. **Advanced Engineering Box** - Wrapped with NavigationRouter, navigates to `/engineering`
2. **Artificial Intelligence Box** - Wrapped with NavigationRouter, navigates to `/ai`  
3. **Systems & Society Box** - Wrapped with NavigationRouter, navigates to `/social-impact`

Each box includes:
- A title and description
- Glowing hover effects with color-coded themes
- NavigationRouter wrapper for click functionality
- Smooth animations and transitions

### Example from ResearchPage:
```jsx
<NavigationRouter
  route={pillar.route}
  onNavigate={() => {
    console.log(`Navigating to ${pillar.route}`);
  }}
>
  <div className={`bg-gradient-to-br ${pillar.color} p-8 rounded-2xl border ${pillar.borderColor} 
    hover:scale-105 transition-all duration-500 ease-out shadow-xl backdrop-blur-sm cursor-pointer group relative overflow-hidden
    ${pillar.glowColor === 'blue' ? 'hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:border-blue-400/80' : ''}
  `}>
    <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
    <p className="text-white/90 text-base leading-relaxed">{pillar.desc}</p>
  </div>
</NavigationRouter>
```

## Best Practices

1. **Consistent Usage** - Use NavigationRouter consistently throughout your app
2. **Accessibility** - Ensure wrapped content has proper semantic meaning
3. **Performance** - The component is optimized for performance with minimal re-renders
4. **Styling** - Use the `className` prop for custom styling rather than modifying the component
5. **User Experience** - Provide visual feedback (hover effects, cursor changes) for clickable elements

## Troubleshooting

### Common Issues

1. **Navigation not working** - Ensure the `route` prop is provided and valid
2. **Styling conflicts** - Check for CSS conflicts with your existing styles
3. **Click events not firing** - Ensure the wrapped content doesn't have conflicting click handlers

### Debug Mode

To debug navigation issues, add a console log to the `onNavigate` callback:
```jsx
<NavigationRouter 
  route="/ai"
  onNavigate={() => console.log('Navigation to AI page occurred')}
>
  <div>AI Content</div>
</NavigationRouter>
```

## Migration from Old NavigationRouter

If you were using the old NavigationRouter component, you can migrate to the new wrapper approach:

### Old Usage:
```jsx
<NavigationRouter variant="card" route="/ai" />
```

### New Usage:
```jsx
<NavigationRouter route="/ai">
  <div className="card-style-content">
    <h3>AI Projects</h3>
    <p>Click to explore</p>
  </div>
</NavigationRouter>
```

### For Navigation Links:
```jsx
// Old
<NavigationRouter variant="default" />

// New
<NavigationLinks variant="default" />
```

## Contributing

To modify the NavigationRouter component:

1. Edit `src/components/NavigationRouter.jsx`
2. Update the documentation in this file
3. Test the wrapper functionality with various content types
4. Update the ResearchPage implementation if needed

## License

This component is part of the Arenda website project and follows the same licensing terms. 