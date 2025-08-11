import React, { useState } from 'react';

const DevelopmentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <svg 
            className="w-5 h-5 flex-shrink-0" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            
          </svg>
          <span className="text-sm font-medium">
             Website in Development - Changes are expected and information may be incorrect or out of date. Build v.1.0.9
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-black hover:text-gray-800 transition-colors p-1 rounded"
          aria-label="Dismiss banner"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path 
              fillRule="evenodd" 
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DevelopmentBanner;
