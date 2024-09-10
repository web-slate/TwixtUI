import React, { useState } from 'react';

const Radio = ({
  id = '',
  name = '',
  label,
  checked = false,
  disabled = false,
  radioColor = 'text-blue-600',
  overwriteClass = '',
  description,
  onChange,
  position = 'left', // New prop for positioning
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    if (disabled) return;
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  const inputRadioId = id || `twixt-radio-${name?.toLowerCase()}`;

  const radioClasses = `w-5 h-5 shrink-0 border-gray-200 rounded-full focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:focus:ring-offset-gray-800 ${radioColor} ${overwriteClass} ${disabled ? 'opacity-50' : 'cursor-pointer'}`;

  const labelClasses = `text-sm text-gray-600 dark:text-neutral-500 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;

  const RadioInput = () => (
    <div className="flex items-center h-5">
      <input
        id={inputRadioId}
        type="radio"
        name={name}
        checked={isChecked}
        disabled={disabled}
        className={radioClasses}
        onChange={handleChange}
      />
    </div>
  );

  const LabelContent = () => (
    <div className="flex flex-col">
      <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-300">{label}</span>
      {description && (
        <span className={labelClasses}>
          {description}
        </span>
      )}
    </div>
  );

  const LeftLabelContent = () => (
    <div className="flex-grow mr-2">
      <LabelContent />
    </div>
  );

  const RightLabelContent = () => (
    <div className="flex-grow ml-2">
      <LabelContent />
    </div>
  );

  return (
    <div className="relative flex items-center py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
      <label htmlFor={inputRadioId} className={`flex items-center w-full cursor-pointer ${position === 'right' ? 'flex-row-reverse justify-between' : ''}`}>
        {position === 'right' && <LeftLabelContent />}
        <RadioInput />
        {position === 'left' && <RightLabelContent />}
      </label>
    </div>
  );
};

export default Radio;