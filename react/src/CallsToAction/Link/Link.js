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
  children
}) {
  const hasChildren = React.Children.count(children) > 0;
  if (!label && !hasChildren) {
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
      {children || (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          <span className="flex-grow">{label}</span>
          {rightIcon && <span>{rightIcon}</span>}
          {rightContent && <span>{rightContent}</span>}
        </>
      )}
    </a>
  );
}
