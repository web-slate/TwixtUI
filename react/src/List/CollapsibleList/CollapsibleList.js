import React, { useState } from 'react';
import TwixtIcon from '../../Icon';
import List from '../List';

const CollapsibleList = ({ width = 200, collpased = true, header, children, hasDivider = false }) => {
  const [isOpen, setIsOpen] = useState(collpased);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-all duration-300 ease-in-out">
      <div className={`flex justify-between items-center cursor-pointer p-4 bg-gray-100 rounded-md w-${width}
transition-all duration-300 ease-in-out`} onClick={toggleList} style={{ overflow: "hidden" }}>
        <h3 className="font-semibold text-lg">{header}</h3>
        <TwixtIcon type={isOpen ? 'chevronDown' : 'chevronLeft'} variant="outline" />
      </div>

      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}>
        <List hasDivider={hasDivider}>
          {children}
        </List>
      </div>

    </div>
  );
};

export default CollapsibleList;
