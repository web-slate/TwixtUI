import React from 'react'

export default function TwixtAlert({ overwriteClass, title, desc }) {
  const alertClasses = overwriteClass ? overwriteClass : 'bg-orange-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-2';

  return (
    <div className={alertClasses} role="alert">
      <p className="font-bold">{title}</p>
      <p>{desc}</p>
    </div>
  );
}