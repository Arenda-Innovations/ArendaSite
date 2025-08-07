import React from 'react';

/**
 * FounderProfile Component
 * 
 * A reusable component for displaying founder/team member profiles with configurable image orientation.
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - The founder's name
 * @param {string} props.title - The founder's title/position
 * @param {string} props.description - The founder's description/bio
 * @param {string} props.imageUrl - URL for the founder's profile image
 * @param {'left'|'right'} [props.orientation='left'] - Image orientation ('left' or 'right')
 * @param {string} [props.className=''] - Additional CSS classes
 * 
 * @example
 * // Image on the left (default)
 * <FounderProfile
 *   name="John Doe"
 *   title="CEO & Co-Founder"
 *   description="John is a visionary entrepreneur..."
 *   imageUrl="https://example.com/john.jpg"
 *   orientation="left"
 * />
 * 
 * @example
 * // Image on the right
 * <FounderProfile
 *   name="Jane Smith"
 *   title="CTO & Co-Founder"
 *   description="Jane is a brilliant technologist..."
 *   imageUrl="https://example.com/jane.jpg"
 *   orientation="right"
 * />
 */
const FounderProfile = ({ 
  name, 
  title, 
  description, 
  imageUrl, 
  orientation = 'left', // 'left' or 'right'
  className = '' 
}) => {
  const isImageLeft = orientation === 'left';

  return (
    <div className={`flex items-center gap-8 py-8 ${className}`}>
      {/* Image Section */}
      <div className={`flex-shrink-0 ${isImageLeft ? 'order-1' : 'order-2'}`}>
        <img
          src={imageUrl}
          alt={`${name} - ${title}`}
          className="w-64 h-64 rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className={`flex-1 ${isImageLeft ? 'order-2' : 'order-1'}`}>
        <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
        <h3 className="text-xl text-gray-300 mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FounderProfile; 