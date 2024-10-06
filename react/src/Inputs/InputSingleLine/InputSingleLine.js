import React, { useRef, useEffect } from 'react';
import TwixtIcon from '../../Icon';
import TwixtButton from '../../CallsToAction/Button';

const stateIcons = {
  success: <TwixtIcon type="success" variant="filled" size={16} />,
  error: <TwixtIcon type="error" overwriteClass="text-red-500 text-lg" size={16} />,
  warning: <TwixtIcon type="warning" overwriteClass="text-yellow-500 text-lg" size={16} />,
  info: <TwixtIcon type="info" overwriteClass="text-blue-500 text-lg" size={16} />,
};

const InputSingleLine = ({
  fieldId,
  hideLabel = false,
  label = '',
  value = '',
  onChange,
  placeholder = '',
  type = 'text',
  disabled = false,
  autoGrowWidth = false,
  leftIcon = null,
  rightIcon = null,
  state = '', // 'info', 'success', 'error', 'warning'
  helperText = '',
  ...props
}) => {
  const inputRef = useRef(null);
  const spanRef = useRef(null);

  // Update the input width based on the span width
  useEffect(() => {
    if (autoGrowWidth && spanRef.current && inputRef.current) {
      inputRef.current.style.width = `${spanRef.current.offsetWidth}px`;
    }
  }, [value, autoGrowWidth]);

  const borderColor = {
    success: 'border-teal-500',
    error: 'border-red-500',
    warning: 'border-yellow-500',
    info: 'border-blue-500',
    default: 'border-gray-500',
  };

  const backgroundColor = {
    success: 'bg-teal-50',
    error: 'bg-red-50',
    warning: 'bg-yellow-50',
    info: 'bg-blue-50',
    default: 'bg-gray-50',
  };

  const inputPadding = `${leftIcon ? 'pl-7' : 'pl-4'} pr-10`;

  return (
    <div className="flex flex-col">
      {(label != '' && hideLabel === false) && (
        <label
          htmlFor={fieldId}
          className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${disabled && 'opacity-50 cursor-not-allowed'}`}
        >
          {label}
        </label>
      )}
      <div className={`relative flex items-center rounded-lg ${backgroundColor[state] || backgroundColor.default}`}>
        {leftIcon && <span className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${disabled && 'opacity-50'}`}>{leftIcon}</span>}
        <input
          type={type}
          id={fieldId}
          ref={inputRef}
          className={`bg-gray-50 border ${borderColor[state] || borderColor.default} text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 block ${autoGrowWidth ? 'min-w-64 w-auto' : 'w-full'} p-2.5 ${inputPadding} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={(e) => {
            onChange(e);
          }}
          {...props}
        />
        <div className="absolute right-2 flex justify-center space-x-1">
          {value && !disabled && (
            <TwixtButton
              hideLabel
              leftIcon={<TwixtIcon type="close" color="black" size={18} variant="filled" />}
              overwriteClass="bg-transparent text-gray-400 hover:text-gray-600"
              onClick={() => onChange({ target: { value: '' } })}
            />
          )}
          {rightIcon && <span>{rightIcon}</span>}
          {state && stateIcons[state] && (
            <span className={`${disabled && 'opacity-50'}`}>
              {stateIcons[state]}
            </span>
          )}
        </div>
        {autoGrowWidth && (
          <span
            ref={spanRef}
            className="absolute invisible whitespace-pre"
            style={{ visibility: 'hidden', whiteSpace: 'pre' }}
          >
            {value || placeholder}
          </span>
        )}
      </div>
      {helperText && (
        <p className={`text-xs ${borderColor[state] || 'text-gray-600'} p-2 px-4 rounded-b-lg ${backgroundColor[state] || backgroundColor.default}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default InputSingleLine;
