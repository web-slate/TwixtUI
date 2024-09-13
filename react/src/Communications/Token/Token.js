import React from 'react';

const Token = ({
  background = '#e5e9f0',
  color = '#70728f',
  label,
  description,
  icon,
  removable = false,
  onRemove,
  overwriteClass = '',
}) => {
  return (
    <div
      className={
        overwriteClass || 'inline-flex items-center py-1 px-2 rounded-md'
      }
      style={{ backgroundColor: background, color: color }}
    >
      {icon && <div className="mr-2">{icon}</div>}
      <div className="flex flex-col">
        {label && <div className="font-sm text-sm">{label}</div>}
        {description && <div className="text-xs">{description}</div>}
      </div>
      {removable && (
        <button
          onClick={onRemove}
          className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          style={{ color }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Token;
