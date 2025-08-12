import React from 'react';

const BulletPoint = ({ text, color = 'blue' }) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue':
        return 'text-blue-400';
      case 'purple':
        return 'text-purple-400';
      case 'green':
        return 'text-green-400';
      default:
        return 'text-blue-400';
    }
  };

  return (
    <li className="flex items-start space-x-3">
      <span className={`${getColorClass()} text-xl mt-1`}>•</span>
      <span>{text}</span>
    </li>
  );
};

export default BulletPoint;
