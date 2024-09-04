import React, { useState } from 'react';

const Radio = ({
  name,
  label,
  checked = false,
  disabled = false,
  radioColor = 'text-blue-600',
  overwriteClass = '',
  description,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    if (disabled) return;
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  const id = `radio-${name}`;

  const radioClasses = `w-5 h-5 shrink-0 mt-1 border-gray-200 rounded-full focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:focus:ring-offset-gray-800 ${radioColor} ${overwriteClass} ${disabled ? 'opacity-50' : 'cursor-pointer'}`;

  const labelClasses = `text-sm text-gray-600 dark:text-neutral-500 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;

  return (
    <div className="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
      <div className="flex items-center h-5 mt-1">
        <input
          id={id}
          type="radio"
          name={name}
          checked={isChecked}
          disabled={disabled}
          className={radioClasses}
          onChange={handleChange}
        />
      </div>
      <label htmlFor={id} className="ms-3 mt-1.5 flex flex-col">
        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-300">{label}</span>
        {description && (
          <span className={labelClasses}>
            {description}
          </span>
        )}
      </label>
    </div>
  );
};

export default Radio;
