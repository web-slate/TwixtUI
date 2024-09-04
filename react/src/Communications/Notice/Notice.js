import React, { useState } from 'react';
import TwixtIcon from '../..//Icon';

const Notice = ({ title, icon, children, callToActionButtons, overwriteClass }) => {
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
           <TwixtIcon type={isCollapsed? 'chevronDown': 'chevronUp'} variant="outline" /> 
        </div>
      </div>
      {!isCollapsed && (
        <div className="p-4">
          <div>{children}</div>
          <div className="mt-4">
            {callToActionButtons}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;