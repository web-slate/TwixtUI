import React from 'react';
import TwixtBoxItem from '../../Containers/BoxItem';
const statusIndicatorColors = {
    default: 'bg-gray-200',
    active: 'bg-blue-600',
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500'
};

function StatusDot({status = 'default' , overwriteClass}) {
  const statsClasses = overwriteClass || `flex w-3 h-3 me-3 rounded-full ${statusIndicatorColors[status]}`;
  return <TwixtBoxItem overwriteClass={statsClasses}></TwixtBoxItem>;
}

export default StatusDot;
