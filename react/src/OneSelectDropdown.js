import React, { useState } from 'react';

const OneSelectDropdown = ({ button = "Setting", links = [], className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-200 ${className}`}
        type="button"
      >
        {button}
        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {isOpen && (
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute mt-2">
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
            {links.map((item, index) => (
              <li key={index}>
                <div className="flex p-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex items-center gap-2">
                    <input
                      id={`helper-radio-${index}`}
                      name="helper-radio"
                      type="radio"
                      value={item}
                      checked={selectedOption === item}
                      onChange={handleOptionChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                      <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                        {item}
                      </label>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OneSelectDropdown;
