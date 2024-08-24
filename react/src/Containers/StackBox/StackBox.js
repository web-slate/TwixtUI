import React from 'react';

function StackBox({ direction = 'horizontal', children, overwriteClass = '' }) {
  const stackClasses = direction === 'horizontal' ? 'flex' : 'flex flex-col';
  return <div className={`${stackClasses} ${overwriteClass}`}>{children}</div>;
}

export default StackBox;
