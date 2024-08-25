import React, { useState, useRef, useEffect } from 'react';

const Popover = ({
  id,
  show = false,
  title = 'title',
  content = 'content',
  position = 'top',
  children,
  scrollable = false,
  hideOnBlur = true,
  overwriteContentClass = ''
}) => {
  const [isOpen, setIsOpen] = useState(show);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      triggerRef.current &&
      !triggerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleChildrenBlur = () => {
    if (hideOnBlur === true) {
      setIsOpen(false)
    }
  }

  return (
    <div className="relative inline-block text-left">
      <div ref={triggerRef} onClick={handleToggle} onBlur={handleChildrenBlur}>
        {children}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          role="tooltip"
          className={`absolute z-10 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 ${positionClass(position)} w-auto min-w-[200px] ${scrollable ? 'max-h-[300px]' : 'max-h-[none]'} ${scrollable ? 'overflow-y-auto' : ''}`}
        >
          <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
          </div>
          <div className={`${scrollable ? 'overflow-y-auto max-h-[300px]' : ''} ${overwriteContentClass ? overwriteContentClass : 'px-3 py-2'}`}>
            {content}
          </div>
          <div data-popper-arrow></div>
        </div>
      )}
    </div>
  );
};

const positionClass = (position) => {
  switch (position) {
    case 'top':
      return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'; 
    case 'right':
      return 'top-1/2 left-full transform -translate-y-1/2 ml-2'; 
    case 'bottom':
      return 'top-full left-1/2 transform -translate-x-1/2 mt-2'; 
    case 'left':
      return 'top-1/2 right-full transform -translate-y-1/2 mr-2'; 
    default:
      return '';
  }
};

export default Popover;