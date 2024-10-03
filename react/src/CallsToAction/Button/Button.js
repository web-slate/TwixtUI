import React from 'react';
import TwixtSpinner from '../../Communications/Spinner';

export default function TwixtButton({
  id = '',
  type = 'button', // 'submit', 'reset', or 'button'
  variant = 'default', // 'primary', 'secondary', 'default'
  background = '',
  color = '',
  children,
  leftIcon = null,
  rightIcon = null,
  label,
  hideLabel = false,
  disabled = false,
  showSpinner = false,
  onClick,
  overwriteClass,
  appendClass= '',
}) {
  // Handle background, text, hover, and focus colors based on the variant
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'bg-blue-700',
          color: 'text-white',
          hover: 'hover:bg-blue-800',
          focus: 'focus:ring-blue-300',
          dark: 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        };
      case 'secondary':
        return {
          background: 'bg-gray-700',
          color: 'text-white',
          hover: 'hover:bg-gray-800',
          focus: 'focus:ring-gray-300',
          dark: 'dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
        };
      case 'transparent':
        return {
          background: 'bg-transparent',
          color: 'text-gray-700',
          placeholder: 'placeholder-gray-500',
          border: 'border border-gray-300',
          hover: 'hover:border-gray-400',
          focus: 'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent',
          dark: 'dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:hover:border-gray-500 dark:focus:ring-gray-800',
        };
      default:
        return {
          background: 'bg-gray-200',
          color: 'text-black',
          hover: 'hover:bg-gray-300',
          focus: 'focus:ring-gray-300',
          dark: 'dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600',
        };
    }
  };

  const { background: bgClass, color: textClass, hover: hoverClass, focus: focusClass, dark: darkClass } = getButtonStyles();

  const buttonClasses = overwriteClass || `flex items-center justify-center space-x-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${hoverClass} ${focusClass} ${darkClass} ${appendClass}` ;

  return (
    <button
      id={`twixt-button-${id}`}
      type={type} // 'submit', 'reset', or 'button'
      onClick={onClick}
      className={` ${background || bgClass} ${color || textClass} ${buttonClasses} ${(disabled) ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={showSpinner || disabled}
    >
      {children ? (
        children
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {!hideLabel && <span>{label}</span>}
          {showSpinner && <TwixtSpinner size="sm" overwriteClass="flex" />}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );
}