import React from 'react';
import { ListContext } from './ListContext';

const List = ({ hasDivider = false, overwriteItemClass = '', header = null, children }) => {
  return (
    <ListContext.Provider value={{ hasDivider, overwriteItemClass }}>
      <div className="list-container">
        {header && <div className="list-header mb-2 font-bold">{header}</div>}
        <div className={`list-items ${hasDivider ? 'divide-y divide-gray-200' : ''}`}>
          {children}
        </div>
      </div>
    </ListContext.Provider>
  );
};

export default List;
