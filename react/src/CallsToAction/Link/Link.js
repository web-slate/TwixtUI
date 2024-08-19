import React from 'react';

export default function TwixtLink({
  background = 'bg-transparent',
  color = 'text-blue-500',
  value = '', 
  onClick,
  overwriteClass = '',
  children,
}) {
  return (
    <a
      href={value}
      className={`${background} ${color} ${overwriteClass}`}
      onClick={onClick}
      target="_blank"
    >
      {children}
    </a>
  );
}
