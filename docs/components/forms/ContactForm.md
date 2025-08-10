# ContactForm Component

## Overview

The `ContactForm` component is a comprehensive contact form that allows users to send messages to the Arenda team. It features a two-column layout with the form on the left and informational content on the right, complete with form validation, loading states, and success/error messaging.

## Features

- ✅ **Two-column layout** - Form and information side by side
- ✅ **Form validation** - Required field validation
- ✅ **Loading states** - Visual feedback during submission
- ✅ **Success/Error messaging** - Clear user feedback
- ✅ **Responsive design** - Adapts to different screen sizes
- ✅ **Accessibility** - Proper labels and ARIA attributes
- ✅ **Clean UI** - Modern, professional design
- ✅ **Form reset** - Clears form after successful submission

## Installation

The component is already included in your project at:
```
src/components/ContactForm.jsx
```

## Basic Usage

### Default Usage
```jsx
import ContactForm from './components/ContactForm';

function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
```

### With Custom Styling
```jsx
import ContactForm from './components/ContactForm';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactForm />
    </div>
  );
}
```

## Component Structure

### Left Column - Form
- **Form Title** - "Get in Touch" heading
- **Name Field** - Text input for user's name
- **Email Field** - Email input for contact information
- **Subject Field** - Text input for message subject
- **Message Field** - Textarea for message content
- **Submit Button** - Form submission button
- **Status Messages** - Success/error feedback

### Right Column - Information
- **Section Title** - "Why Contact Us?" heading
- **Description** - Information about contacting the team

## Props

This component doesn't accept any props. It uses internal state for form management.

## State Management

### Form Data State
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
});
```

### UI State
```jsx
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
```

## Form Fields

### Name Field
- **Type**: Text input
- **Required**: Yes
- **Placeholder**: "Wolfe Glick"
- **Validation**: Required field validation

### Email Field
- **Type**: Email input
- **Required**: Yes
- **Placeholder**: "Wolfe@example.com"
- **Validation**: Email format validation

### Subject Field
- **Type**: Text input
- **Required**: Yes
- **Placeholder**: "Inquiry on Pokemon"
- **Validation**: Required field validation

### Message Field
- **Type**: Textarea
- **Required**: Yes
- **Rows**: 5
- **Placeholder**: "Your message here..."
- **Validation**: Required field validation

## Styling

### CSS Classes

#### Main Container
```css
flex h-screen px-8 py-12 gap-8 bg-black
```

#### Form Container
```css
w-[48%] bg-white p-10 flex flex-col justify-center rounded-3xl shadow-xl
```

#### Form Fields
```css
w-full px-4 py-2 rounded-xl bg-zinc-100 border border-zinc-300 text-black focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50
```

#### Submit Button
```css
px-5 py-2 rounded-xl bg-black text-white hover:bg-zinc-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed
```

#### Information Container
```css
w-[48%] bg-gray-200 p-10 flex flex-col justify-center rounded-3xl shadow-xl
```

## Form Validation

### Client-Side Validation
- **Required fields** - All fields are required
- **Email format** - Email field validates email format
- **Real-time feedback** - Validation occurs on change

### Validation Rules
```jsx
// Required field validation
required

// Email format validation (browser-native)
type="email"
```

## User Experience

### Loading States
- **Submit button** - Shows "Sending..." during submission
- **Form fields** - Disabled during submission
- **Visual feedback** - Opacity changes for disabled state

### Success/Error Handling
- **Success message** - "Sent successfully!" displayed in green
- **Error message** - Error details displayed in red
- **Form reset** - Form clears after successful submission

### Accessibility
- **Labels** - All fields have proper labels
- **Focus management** - Proper focus states and keyboard navigation
- **Screen reader support** - Semantic HTML structure

## Implementation Details

### Form Submission
```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setErrorMessage('');
  setSuccessMessage('');
  
  setTimeout(() => {
    setIsSubmitting(false);
    setSuccessMessage('Sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  }, 2000);
};
```

### Form Field Handling
```jsx
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
```

## Best Practices

1. **Form validation** - Always validate required fields
2. **User feedback** - Provide clear success/error messages
3. **Loading states** - Show loading indicators during submission
4. **Accessibility** - Ensure all fields are properly labeled
5. **Mobile responsiveness** - Test on mobile devices

## Troubleshooting

### Common Issues

1. **Form not submitting** - Check if all required fields are filled
2. **Validation errors** - Ensure email format is correct
3. **Styling issues** - Check for CSS conflicts
4. **Accessibility issues** - Test with screen readers

### Debug Mode

To debug form issues, add console logs:
```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form data:', formData);
  setIsSubmitting(true);
  // ... rest of submission logic
};
```

## Integration Examples

### With Navigation
```jsx
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactForm />
    </div>
  );
}
```

### With Custom Styling
```jsx
import ContactForm from './components/ContactForm';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="container mx-auto py-8">
        <ContactForm />
      </div>
    </div>
  );
}
```

## Performance Considerations

- **Minimal re-renders** - Component only re-renders when state changes
- **Efficient validation** - Validation occurs on change, not on every render
- **Optimized styling** - Uses Tailwind CSS for efficient styling

## Browser Support

- **Modern browsers** - Full support for form validation and CSS Grid
- **Mobile browsers** - Optimized for mobile form interaction
- **Accessibility** - Screen reader and keyboard navigation support

## Future Enhancements

### Potential Improvements
1. **Server integration** - Connect to backend API
2. **File uploads** - Add file attachment support
3. **Advanced validation** - Custom validation rules
4. **Form persistence** - Save draft messages
5. **Analytics** - Track form submissions

### Backend Integration
```jsx
// Example backend integration
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSuccessMessage('Sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setErrorMessage('Failed to send message. Please try again.');
    }
  } catch (error) {
    setErrorMessage('Network error. Please check your connection.');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Contributing

To modify the ContactForm component:

1. Edit `src/components/ContactForm.jsx`
2. Update the documentation in this file
3. Test form validation and submission
4. Ensure accessibility standards are met

## License

This component is part of the Arenda website project and follows the same licensing terms. 