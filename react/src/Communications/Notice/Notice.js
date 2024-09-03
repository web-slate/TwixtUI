import React, { useState } from 'react';

const Notice = ({ title, icon, children, cta, overwriteClass }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`border rounded-lg shadow-lg ${overwriteClass}`}>
      <div className="flex items-center p-4 cursor-pointer" onClick={toggleCollapse}>
        <div className="w-4 h-4 mr-2">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="ml-auto">
          <svg
            className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {!isCollapsed && (
        <div className="p-4">
          <div>{children}</div>
          <div className="mt-4">
            {cta}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;