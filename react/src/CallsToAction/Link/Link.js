import React from 'react';

export default function TwixtLink({
  background = '',
  color = 'text-blue-500',
  link = '#', 
  onClick,
  overwriteClass = '',
  appendClass = '',
  label,
  leftIcon, 
  rightIcon, 
  rightContent,
  target,
}) {
  if (!label) {
    return null;
  }

  const classNames = overwriteClass || `inline-flex items-center gap-2 ${background} ${color} ${appendClass}`;

  return (
    <a
      href={link}
      className={classNames}
      onClick={onClick}
      target={target}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span>{label}</span>
      {rightIcon && <span>{rightIcon}</span>}
      {rightContent && <span>{rightContent}</span>}
    </a>
  );
}
