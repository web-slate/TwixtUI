import React from 'react';
import BoxItem from '../../Containers/BoxItem';

const Badge = ({ type = 'block', value, status, overwriteClass, leftIcon, rightIcon }) => {
  const statusToColor = {
    default: 'bg-gray-500',
    active: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    magenta: 'bg-pink-500',
    purple: 'bg-purple-500',
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500',
  };

  const badgeColor = statusToColor[status] || 'bg-gray-500';
  const badgeClasses = overwriteClass || `inline-flex items-center px-3 py-1 text-white font-semibold text-sm rounded-full ${badgeColor}`;
  

  return (
    <BoxItem type={type} overwriteClass={badgeClasses}>
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      <span>{value}</span>
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </BoxItem>
  );
};

export default Badge;
