import React from 'react';

export default function TwixtLink({
  background = '',
  color = 'text-blue-500',
  link = '#', 
  onClick,
  overwriteClass = '',
  label,
  leftIcon, 
  rightIcon, 
  rightContent,
  target,
  appendClass=''
}) {
  if (!label) {
    return null;
  }
  const linkClasses = overwriteClass || 'inline-flex items-center gap-4 '+ appendClass;
  return (
    <a
      href={link}
      className={`${linkClasses.trimEnd()} ${background} ${color}`}
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
