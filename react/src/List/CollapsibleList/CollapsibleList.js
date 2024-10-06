import React, { useState } from 'react';
import TwixtIcon from '../../Icon';
import List from '../List';

const CollapsibleList = ({
  width = 200,
  collpased = true,
  header,
  headerLabel = '',
  children,
  hasDivider = false,
  leftIcon = '',
  appendClass = '',
  overwriteClass = ''
}) => {
  const [isOpen, setIsOpen] = useState(!collpased);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const classNames = overwriteClass || `flex justify-between items-center cursor-pointer p-4 bg-gray-100 rounded-md w-${width}
transition-all duration-300 ease-in-out ${appendClass}`;

  return (
    <div className="transition-all duration-300 ease-in-out">
      <div className={classNames} onClick={toggleList} style={{ overflow: "hidden" }}>
        {leftIcon}
        {header || <h3 className="font-semibold text-lg flex-grow">{headerLabel}</h3>}
        <TwixtIcon type={isOpen ? 'chevronDown' : 'chevronUp'} variant="outline" size="16" />
      </div>

      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}>
        <List hasDivider={hasDivider} overwriteItemClass="px-4">
          {children}
        </List>
      </div>

    </div>
  );
};

export default CollapsibleList;
