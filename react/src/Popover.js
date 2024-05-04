import React, { useState } from 'react';

const PopoverButton = ({ buttonText = 'Click to popover', title = 'Default Title', content = 'Default Content' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        onClick={togglePopover}
      >
        {buttonText}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-64 bg-white rounded-lg shadow-lg">
          <div className="text-white text-lg text-center font-semibold mb-2 bg-blue-500 rounded p-2">{title}</div>
          <div className='p-4'>{content}</div>
        </div>
      )}
    </div>
  );
};

export default PopoverButton;
