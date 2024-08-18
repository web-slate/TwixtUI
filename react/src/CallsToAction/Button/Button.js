import React from 'react'

export default function TwixtButton({ children, onClick, overwriteClass }) {
  const buttonClasses = overwriteClass ? overwriteClass : 'px-4 py-2 bg-indigo-500 text-white rounded-md';

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}