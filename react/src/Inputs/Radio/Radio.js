import React, { useState } from 'react';

function Radio({
  name,
  label,
  checked = false,
  disabled = false,
  radioColor = 'text-blue-600',
  overwriteClass = '',
  position = 'left',
  description,
  onChange,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    if (disabled) return;
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  const id = `radio-${name}`;

  const radioClasses = `w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded-full focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:focus:ring-offset-gray-800 ${radioColor} ${overwriteClass} ${disabled ? 'opacity-50' : 'cursor-pointer'}`;

  const labelClasses = `text-sm text-gray-500 ${position === 'right' ? 'ms-auto' : 'ms-2'} flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;

  return (
    <div className={`flex space-x-2 ${position === 'right' ? 'justify-between' : ''}`}>
      {position === 'left' && (
        <input
          id={id}
          type="radio"
          name={name}
          checked={isChecked}
          disabled={disabled}
          className={radioClasses}
          onChange={handleChange}
        />
      )}
      <label htmlFor={id} className={labelClasses}>
        {label}
        {description && (
          <span className="block text-sm text-gray-600 dark:text-neutral-500">
            {description}
          </span>
        )}
      </label>
      {position === 'right' && (
        <input
          id={id}
          type="radio"
          name={name}
          checked={isChecked}
          disabled={disabled}
          className={radioClasses}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default Radio;
