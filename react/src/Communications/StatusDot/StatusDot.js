import React from 'react';
const statusIndicatorColors = {
    OffLine: 'bg-gray-200',
    Active: 'bg-green-500',
    DoNotDisturb: 'bg-red-500',
    InMeeting: 'bg-orange-500',
    Away: 'bg-yellow-500'
  };

function StatusDot({status = 'OffLine' , overwriteClass}) {
  const statsClasses = overwriteClass || `flex w-3 h-3 me-3 rounded-full ${statusIndicatorColors[status]}`;

  return(
    <>
      <span class={statsClasses}>
      </span>
    </>
  );
        
}

export default StatusDot
