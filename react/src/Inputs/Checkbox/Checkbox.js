import React, { useState, useEffect } from 'react';

export default function TwixtCheckbox({
  checked = false,
  label,
  description,
  children,
  position = 'left', // 'left' or 'right'
  disabled = false,
  indeterminate = false,
  onChange = () => {},
  overwriteClass = '', // New prop to overwrite default classes
  checkboxColor = 'text-blue-600' // New prop to overwrite checkbox color
}) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  // Apply indeterminate state if needed
  const checkboxRef = React.useRef(null);
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Define default classes and apply the overwriteClass
  const defaultClasses = `form-checkbox h-5 w-5 mt-0.5 border-gray-200 rounded ${checkboxColor} focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed 
    dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 ${overwriteClass}`;

  return (
    <label className="inline-flex items-center space-x-3 cursor-pointer">
      {position === 'left' && (
        <input
          type="checkbox"
          ref={checkboxRef}
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={disabled}
          className={defaultClasses}
        />
      )}
      <div className={`ms-3 flex flex-col ${position === 'right' ? 'me-auto' : ''}`}>
        {label && (
          <span className={`text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-700'} dark:text-neutral-400`}>
            {label}
          </span>
        )}
        {description && (
          <span className={`text-xs ${disabled ? 'text-gray-400' : 'text-gray-500'} dark:text-neutral-500`}>
            {description}
          </span>
        )}
        {children}
      </div>
      {position === 'right' && (
        <input
          type="checkbox"
          ref={checkboxRef}
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={disabled}
          className={defaultClasses}
        />
      )}
    </label>
  );
}
