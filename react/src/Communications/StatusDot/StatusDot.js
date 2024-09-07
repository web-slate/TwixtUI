import React from 'react';
const statusIndicatorColors = {
    Default: 'bg-gray-200',
    Active: 'bg-blue-600',
    Success: 'bg-green-500',
    Error: 'bg-red-500',
    Warning: 'bg-yellow-500'
};

function StatusDot({status = 'Default' , overwriteClass}) {
  const statsClasses = overwriteClass || `flex w-3 h-3 me-3 rounded-full ${statusIndicatorColors[status]}`;
  return <span class={statsClasses}></span>;
}

export default StatusDot
