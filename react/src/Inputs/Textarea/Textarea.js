import React, { useState, useEffect, useRef } from 'react';
import TwixtIcon from '../../Icon';

const Textarea = ({
  label,
  placeholder = "Enter text here...",
  type = "default",
  size = "default",
  autoHeight = false,
  helpMessage = "",
  message = "",
  showWordCount = false,
  validationState = null, // Can be 'error', 'success', 'warning'
  value = "",
  disabled = false,
  readOnly = false,
  leftTop = null,      // Left top icon/content
  leftBottom = null,   // Left bottom icon/content
  rightTop = null,     // Right top icon/content
  rightBottom = null,  // Right bottom icon/content
  minRows = 3,
  cols = 30, // Set a default value for cols
}) => {
  const [text, setText] = useState(value);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (autoHeight && textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset the height to auto to allow shrinking
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the new height based on scrollHeight
    }
  }, [text, autoHeight]);

  const sizeClasses = {
    small: "py-2 px-3",
    default: "py-3 px-4",
    large: "py-4 px-5",
  };

  const baseClasses = `block w-full rounded-lg text-sm border ${
    validationState === "error"
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : validationState === "success"
      ? "border-teal-500 focus:border-teal-500 focus:ring-teal-500"
      : validationState === "warning"
      ? "border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500"
      : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
  } ${disabled ? "opacity-50 pointer-events-none" : ""} ${
    readOnly ? "cursor-not-allowed" : ""
  } ${sizeClasses[size]} ${autoHeight ? "resize-none overflow-hidden" : "resize"}`;

  const underlineClasses =
    type === "underline"
      ? "bg-transparent border-t-transparent border-b-2 border-x-transparent focus:border-b-blue-500 focus:ring-0"
      : "";

  // Determine icon for validation state (rightTop icon)
  const getValidationIcon = () => {
    switch (validationState) {
      case 'error':
        return <TwixtIcon type="error" overwriteClass="text-red-500 text-lg" variant="filled" size={24} />
      case 'success':
        return <TwixtIcon type="success" variant="filled" size={24} />
      case 'warning':
        return <TwixtIcon type="warning" overwriteClass="text-yellow-500 text-lg" variant="filled" size={24} />
      default:
        return rightTop;
    }
  };

  return (
    <div className="relative max-w-sm space-y-2">
      {label && (
        <label className="block text-sm font-medium mb-2 dark:text-white">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Left Top Icon */}
        {leftTop && (
          <div className="absolute left-2 top-2">
            {leftTop}
          </div>
        )}

        {/* Left Bottom Icon */}
        {leftBottom && (
          <div className="absolute left-2 bottom-2">
            {leftBottom}
          </div>
        )}

        {/* Right Top Icon - Validation Icon */}
        <div className="absolute right-2 top-2">
          {getValidationIcon()}
        </div>

        {/* Right Bottom Icon */}
        {rightBottom && (
          <div className="absolute right-2 bottom-2">
            {rightBottom}
          </div>
        )}

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          className={`${baseClasses} ${underlineClasses}`}
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          rows={minRows}
          cols={cols} // Use the cols prop to determine width
          style={{ minHeight: `${minRows * 1.5}em`, width: cols ? 'auto' : '100%' }} // Ensure default width if cols is null
        />
      </div>

      {helpMessage && (
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          {helpMessage}
        </p>
      )}
      {showWordCount && (
        <span className="text-sm text-gray-500 dark:text-neutral-500">
          {text.length} characters
        </span>
      )}
      {validationState === "error" && (
        <p className="text-sm text-red-600 mt-2">{message}</p>
      )}
      {validationState === "success" && (
        <p className="text-sm text-teal-600 mt-2">{message}</p>
      )}
    </div>
  );
};

export default Textarea;
