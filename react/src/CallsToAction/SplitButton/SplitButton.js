import React, { useState } from 'react';
import ButtonGroup from '../ButtonGroup';
import TwixtButton from '../Button';
import TwixtIcon from '../../Icon';

function SplitButton({ initialLabel = 'Select Action', options = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMainAction = () => {
    if (selectedOption && selectedOption.onClick) {
      selectedOption.onClick();
    }
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Button Group to hold the main and dropdown buttons */}
      <ButtonGroup>
        {/* Main Action Button */}
        <TwixtButton
          onClick={handleMainAction}
          label={selectedOption ? selectedOption.label : initialLabel}
        />

        {/* Dropdown Toggle Button */}
        <TwixtButton
          onClick={handleDropdownToggle}
          hideLabel={true}
          rightIcon={<TwixtIcon type="chevronDown" />}
        />
      </ButtonGroup>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option, index) => (
            <TwixtButton
              key={index}
              onClick={() => handleOptionClick(option)}
              label={option.label}
              background="bg-white"
              color="text-gray-700"
              overwriteClass="w-full text-left px-4 py-2 hover:bg-gray-100"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SplitButton;
