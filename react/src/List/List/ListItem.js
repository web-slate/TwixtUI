import React from 'react';
import { useListContext } from './ListContext'; // Import the custom hook

const ListItem = ({ label, sublabel, leftContent, rightContent }) => {
  const { hasDivider, overwriteItemClass } = useListContext(); // Use the custom hook

  return (
    <div className={`flex items-center ${hasDivider ? 'py-4' : 'py-2'} ${overwriteItemClass}`}>
      {leftContent && <div className="mr-4">{leftContent}</div>}
      <div className="flex-1">
        <div className="text-sm font-medium">{label}</div>
        {sublabel && <div className="text-xs text-gray-500">{sublabel}</div>}
      </div>
      {rightContent && <div className="ml-4">{rightContent}</div>}
    </div>
  );
};

export default ListItem;
