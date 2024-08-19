import React from 'react';

export default function TwixtLink({
  // background = 'bg-indigo-500',
  color = 'text-white',
  value = '', 
  onClick,
  overwriteClass = '',
  children,
}) {
  const buttonClasses = overwriteClass || 'px-4 py-2 rounded-md';

  return (
    <a
      href={value}
      className={`flex items-center justify-center space-x-2${color} ${buttonClasses}`}
      onClick={onClick}
      target="_blank"
    >
      {children}
    </a>
  );
}