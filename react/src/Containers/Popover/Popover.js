import React, { useState, useRef, useEffect } from 'react';
import TwixtIcon from '../../Icon';
import TwixtButton from '../../CallsToAction/Button';

const Popover = ({
  id,
  show = false,
  title = 'title',
  content = 'content',
  position = 'top-center',
  children,
  hideTitle = false,
  scrollable = false,
  hideOnBlur = true,
  closeIcon = true,
  onClose = () => { },
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
          className={`absolute z-10 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 ${positionClass(position)} w-auto min-w-[200px]`}
        >
          {!hideTitle && title != '' && <div className="flex items-center justify-between px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white flex-1">{title}</h3>
            {closeIcon && (
              <TwixtButton
                hideLabel
                leftIcon={<TwixtIcon type="close" color="black" size={18} variant="filled" />}
                overwriteClass="bg-transparent text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setIsOpen(false);
                  onClose();
                }}
              />
            )}
          </div>}
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
  const [vertical, horizontal] = position.split('-');
  let classes = [];

  switch (vertical) {
    case 'top':
      classes.push('bottom-full mb-2');
      break;
    case 'bottom':
      classes.push('top-full mt-2');
      break;
    case 'left':
      classes.push('right-full mr-2');
      break;
    case 'right':
      classes.push('left-full ml-2');
      break;
  }

  switch (horizontal) {
    case 'left':
      classes.push('left-0');
      break;
    case 'center':
      classes.push('left-1/2 transform -translate-x-1/2');
      break;
    case 'right':
      classes.push('right-0');
      break;
    case 'top':
      classes.push('top-0');
      break;
    case 'middle':
      classes.push('top-1/2 transform -translate-y-1/2');
      break;
    case 'bottom':
      classes.push('bottom-0');
      break;
  }

  return classes.join(' ');
};

export default Popover;