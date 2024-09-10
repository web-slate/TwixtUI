import React, { useState, useId, useEffect, useRef } from 'react';
import TwixtButton from '../../CallsToAction/Button';
import TwixtInputSingleLine from '../InputSingleLine';
import TwixtRadio from '../Radio';
import TwixtIcon from '../../Icon';

const RadioDropdown = ({
  id,
  label = 'Select an option',
  filterLabel = 'Filter options',
  variant = 'default', // 'primary', 'secondary', 'default'
  radioOptions = [],
  enableFilter = false,
  disabled = false,
  defaultValue = '',
  onChange
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterText, setFilterText] = useState(''); // State for filter input
  const dropdownId = useId(); // Generate unique id for each dropdown instance
  const buttonId = useId(); // Generate unique id for each button
  const dropdownRef = useRef(null); // Ref for dropdown menu

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false); // Close dropdown if clicked outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    if (!disabled) {
      setShowDropdown(!showDropdown);
    }
  };

  // Handle the change event for the radio buttons
  const handleRadioChange = (event, value) => {
    setSelectedOption(value);
    setShowDropdown(false); // Close the dropdown when an option is selected

    // Notify parent component of the change if onChange is provided
    if (onChange) {
      onChange(value);
    }
  };

  // Filtered radio options based on filter text
  const filteredOptions = radioOptions.filter((option) =>
    option.label.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown button */}
      <TwixtButton
        id={buttonId} // Unique button ID
        onClick={toggleDropdown}
        variant={variant}
        disabled={disabled}
        label={selectedOption || label}
        rightIcon={<TwixtIcon type="chevronDown" variant="filled" size={16} />}
      />
      {/* Dropdown menu */}
      {showDropdown && !disabled && (
        <div
          id={dropdownId} // Unique dropdown ID
          className="absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          {/* Filter input */}
          {enableFilter && (
            <div className="p-2">
              <TwixtInputSingleLine
                fieldId={`${id}-filter-input`}
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                placeholder={filterLabel}
                disabled={disabled} // Disable filter input if the dropdown is disabled
              />
            </div>
          )}
          <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={buttonId}>
            {filteredOptions.map((option, index) => (
              <li key={index}>
                <TwixtRadio
                  name={`option_${index}`}
                  label={option.label}
                  checked={selectedOption === option.value}
                  onChange={(e) => handleRadioChange(e, option.value)}
                  disabled={option.disabled || disabled} // Ensure radio is disabled if dropdown or option is disabled
                />
              </li>
            ))}
          </ul>
          {filteredOptions.length === 0 && (
            <div className="p-2 text-sm text-gray-500 dark:text-gray-400">
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RadioDropdown;
