import React, { useState } from 'react';

function SplitButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    // Action for the main button
    console.log('Create gist button clicked');
  };

  const handleOptionClick = (option) => {
    // Action for the dropdown options
    console.log(`${option} clicked`);
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative inline-block">
      {/* Main Button */}
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-l-md hover:bg-blue-600 focus:outline-none"
      >
        Create Gist
      </button>

      {/* Dropdown Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
      >
        ▼
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <button
            onClick={() => handleOptionClick('Create public gist')}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Create public gist
          </button>
          <button
            onClick={() => handleOptionClick('Create secret gist')}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Create secret gist
          </button>
        </div>
      )}
    </div>
  );
}

export default SplitButton;
