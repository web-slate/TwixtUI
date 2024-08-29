import React, { useEffect } from 'react';


const Toast = ({ title, body, type = 'info', autoHide = 0, onHide, overwriteClass, position = 'bottom-right' }) => {

  const typeToColor = {
    info: 'border-blue-500',
    warning: 'border-orange-500',
    error: 'border-red-500',
  };

  const typeToBackgroundColor = {
    info: 'bg-blue-100',
    warning: 'bg-orange-100',
    error: 'bg-red-100',
  };

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };

  const borderColor = typeToColor[type] || 'border-blue-500'; 
  const backgroundColor = typeToBackgroundColor[type] || 'bg-blue-100'; 
  const positionClass = positionClasses[position] || 'bottom-right';
  const toastClasses = overwriteClass || `fixed ${positionClass} flex items-start p-4 mb-4 text-sm text-black ${backgroundColor} border-l-4 ${borderColor} shadow-md rounded-md`;

  useEffect(() => {
    if (autoHide > 0) {
      const timer = setTimeout(() => {
        if (onHide) onHide();
      }, autoHide);
      return () => clearTimeout(timer);
    }
  }, [autoHide, onHide]);

  return (
    <div className={toastClasses}>
      <div className="flex-grow">
        <h4 className="font-semibold">{title}</h4>
        {body && <p className="mt-1">{body}</p>}
      </div>
      <button
        onClick={onHide}
        className="ml-4 text-black hover:text-gray-700 focus:outline-none"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
