import React from 'react';
import PlaceholderImage from './PlaceholderImage';

const WhyArendaBox = ({ 
  reason, 
  index, 
  boxRef,
  isWide = false,
  isTall = false 
}) => {
  return (
    <div
      ref={boxRef}
      className={`${isWide ? 'md:col-span-2' : ''} ${isTall ? 'md:row-span-2' : ''} 
        bg-gradient-to-br ${reason.color} p-4 rounded-xl border ${reason.borderColor} 
        backdrop-blur-sm shadow-xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer group
        ${reason.rotation}
        hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:border-white/40
      `}
    >
      {/* Glow effect overlay */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out
        bg-gradient-to-br from-white/10 via-white/5 to-white/10`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-lg font-bold mb-3 text-white group-hover:text-white transition-colors duration-300 text-center">
          {reason.title}
        </h3>

        {/* Image Section with Bullets Overlay */}
        <PlaceholderImage 
          emoji="🖼️"
          text="Image"
          size="default"
          showBullets={true}
          bullets={reason.bullets}
        />
      </div>
    </div>
  );
};

export default WhyArendaBox;
