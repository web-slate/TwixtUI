import React from 'react';

export default function TwixtLink({
  background = '',
  color = 'text-blue-500',
  link = '#', 
  onClick,
  overwriteClass = '',
  label,
}) {
  if (!label) {
    return null; // Return null if no label is provided
  }

  return (
    <a
      href={link}
      className={`${background} ${color} ${overwriteClass}`}
      onClick={onClick}
      target="_blank"
    >
      {label}
    </a>
  );
}
