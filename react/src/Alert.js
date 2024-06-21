import React from 'react'
import { FaInfoCircle, FaExclamationCircle, FaCheckCircle, FaExclamationTriangle, FaTimes } from 'react-icons/fa';

const alertStyles = {
  base: 'p-4 pl-5 pr-5 rounded-md flex items-center',
  types: {
    announcement: 'bg-blue-50 border-l-4 border-blue-400 text-blue-700',
    error: 'bg-red-50 border-l-4 border-red-400 text-red-700',
    notification: 'bg-green-50 border-l-4 border-green-400 text-green-700',
    warning: 'bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700'
  },
  icons: {
    announcement: FaInfoCircle,
    error: FaExclamationCircle,
    notification: FaCheckCircle,
    warning: FaExclamationTriangle,
  }
};

export default function TwixtAlert({ type = 'announcement', overwriteClass, title, desc, linkText, linkUrl, onClose }) {
  const typeStyle = alertStyles.types[type] || alertStyles.types.announcement;
  const Icon = alertStyles.icons[type] || FaInfoCircle;

  if (!title) {
    return null;
  }

  return (
    <div className={`${alertStyles.base} ${typeStyle} ${overwriteClass}`}>
      <Icon className="mr-2" />
      <div className="flex-grow">
        {title && <div className="font-bold">{title}</div>}
        <div>{desc}</div>
      </div>
      {linkText && linkUrl && (
        <a href={linkUrl} className="ml-4 text-blue-500 hover:text-blue-700">
          {linkText}
        </a>
      )}
      {onClose && (
        <button onClick={onClose} className="ml-4 text-current">
          <FaTimes className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}