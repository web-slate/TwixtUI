import React, { useState } from 'react';

const MultiSelectMenu = ({ button = 'button', listLink = [] }) => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleMainDropdown = () => {
    setIsMainOpen(!isMainOpen);
    setOpenSubMenus({}); 
  };

  const toggleSubDropdown = (index) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const renderMenuItem = (key, value, index) => {
    if (typeof value === 'object') {
      return (
        <div key={index} className="relative">
          <button
            id={`doubleDropdownButton-${index}`}
            onClick={() => toggleSubDropdown(index)}
            type="button"
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-blue-200"
          >
            {key}
            <svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </button>
          {openSubMenus[index] && (
            <div id="doubleDropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow ml-6 px-4 dark:bg-gray-700 absolute top-0 left-full ml-2">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`doubleDropdownButton-${index}`}>
                {Object.entries(value).map(([subKey, subValue], subIndex) => (
                  <li key={subIndex}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{subValue}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <li key={index}>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{value}</a>
        </li>
      );
    }
  };

  return (
    <div className="relative">
      <button
        id="multiLevelDropdownButton"
        onClick={toggleMainDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-200"
        type="button"
      >
        {button}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {isMainOpen && (
        <div id="multi-dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow px-4 dark:bg-gray-700 absolute mt-2">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
            {listLink.map((item, index) => (
              <React.Fragment key={index}>
                {Object.entries(item).map(([key, value], subIndex) => renderMenuItem(key, value, `${index}-${subIndex}`))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelectMenu;
