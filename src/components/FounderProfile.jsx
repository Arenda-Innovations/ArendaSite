import React from 'react';

function isMdOrSmaller() {
  const mediaQuery = window.matchMedia('(max-width: 768px)'); 

  return mediaQuery.matches;
}
function cutStringAfterFirstPeriod(str) {
  const firstPeriodIndex = str.indexOf('.');

  if (firstPeriodIndex !== -1) {
    return str.slice(0, firstPeriodIndex + 1);
  } else {
    return str;
  }
}
const FounderProfile = ({ 
  name, 
  title, 
  description, 
  imageUrl, 
  orientation = 'left',
  className = '' 
}) => {
  const isImageLeft = orientation === 'left';

  return (
    <div className={`flex items-center gap-8 py-8 md:ml-[4%] md:mr-[4%] ${className}`}>
      <div className={`flex-shrink-0 ${isImageLeft ? 'order-1' : 'order-2'}`}>
        <img
          src={imageUrl}
          alt={`${name} - ${title}`}
          className="w-64 h-64 rounded-full object-cover shadow-lg"
        />
      </div>

      <div className={`flex-1 ${isImageLeft ? 'order-2' : 'order-1'}`}>
        <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
        <h3 className="text-xl text-gray-300 mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{isMdOrSmaller() ? cutStringAfterFirstPeriod(description) : description}</p>
      </div>
    </div>
  );
};

export default FounderProfile; 