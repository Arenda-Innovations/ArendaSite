import React from 'react';

const PlaceholderImage = ({
  emoji = "🖼️",
  text = "Image",
  subtext = "",
  className = "",
  size = "default",
  showBullets = false,
  bullets = []
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-lg mb-1';
      case 'large':
        return 'text-4xl mb-2';
      default:
        return 'text-2xl mb-1';
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'small':
        return 'text-xs';
      case 'large':
        return 'text-sm';
      default:
        return 'text-xs';
    }
  };

  return (
    <div className={`aspect-square rounded-lg overflow-hidden bg-white/5 relative group ${className}`}>
      {/* Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white/60">
          <div className={getSizeClasses()}>{emoji}</div>
          <p className={getTextSize()}>{text}</p>
          {subtext && <p className="text-xs opacity-50">{subtext}</p>}
        </div>
      </div>

      {/* Bullet Points Overlay - Only show if showBullets is true */}
      {showBullets && bullets.length > 0 && (
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ul className="space-y-1 text-center">
            {bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="text-xs text-white font-medium">
                • {bullet}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlaceholderImage;
