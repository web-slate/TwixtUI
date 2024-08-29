import React from 'react';

const Badge = ({ value, status, overwriteClass }) => {
  const statusToColor = {
    Default: 'bg-gray-500',
    Active: 'bg-blue-500',
    Success: 'bg-green-500',
    Error: 'bg-red-500',
    Warning: 'bg-orange-500',
    Yellow: 'bg-yellow-500',
    Magenta: 'bg-pink-500',
    Purple: 'bg-purple-500',
    Teal: 'bg-teal-500',
    Cyan: 'bg-cyan-500',
  };

  const badgeColor = statusToColor[status] || 'bg-gray-500';
  const badgeClasses = overwriteClass || `inline-block px-3 py-1 text-white font-semibold text-sm rounded-full ${badgeColor}`;
  

  return (
    <div className={badgeClasses}>
      {value}
    </div>
  );
};

export default Badge;
