import React, { useState } from 'react';
import TwixtRadio from '../Radio';

const RadioDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRadioChange = (value) => {
    console.log('Selected:', value);
  };

  return (
    <div className="m-1 relative inline-flex" data-hs-dropdown-auto-close="inside">
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Dropdown"
        onClick={toggleDropdown}
      >
        Actions
        <svg
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="transition-opacity duration-200 min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-dropdown-item-checkbox"
        >
          <TwixtRadio
            name="action"
            label="Delete"
            description="Notify me when this action happens."
            checked={false}
            onChange={() => handleRadioChange('delete')}
          />
          <TwixtRadio
            name="action"
            label="Archive"
            description="Notify me when this action happens."
            checked={false}
            onChange={() => handleRadioChange('archive')}
          />
        </div>
      )}
    </div>
  );
};

export default RadioDropdown;
