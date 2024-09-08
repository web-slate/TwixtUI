import React from 'react';

const Badge = ({ value, status, overwriteClass, leftIcon, rightIcon }) => {
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
  const badgeClasses = overwriteClass || `inline-flex items-center px-3 py-1 text-white font-semibold text-sm rounded-full ${badgeColor}`;
  

  return (
    <div className={badgeClasses}>
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      <span>{value}</span>
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </div>
  );
};

export default Badge;
