import React from 'react';

const ToolTip = ({ children, content, position, show }) => {
  if (!show || children == null) {
    return null;
  }

  let wrapperClassNames = 'absolute transform items-center';
  let arrowClassNames = 'w-3 h-3 bg-gray-700 rotate-45 transform';
  let contentClassNames = 'py-1 px-3 text-sm text-white bg-gray-700 rounded whitespace-nowrap';

  // Set wrapper and arrow position based on the position prop
  switch (position) {
    case 'top':
      wrapperClassNames += ' bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex group-focus:flex flex-col';
      arrowClassNames += ' -translate-y-1/2';
      break;
      case 'bottom':
        wrapperClassNames += ' top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex group-focus:flex flex-col';
        arrowClassNames += ' translate-y-1/2';
      break;
    case 'left':
      wrapperClassNames += ' right-full top-1/2 -translate-y-1/2 mr-2 hidden group-hover:flex group-focus:flex';
      arrowClassNames += ' -translate-x-1/2';
      break;
    case 'right':
        wrapperClassNames += ' left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:flex group-focus:flex';
        arrowClassNames += ' translate-x-1/2';
      break;
    default:
      break;
  }

  // Show or hide the tooltip based on the show prop
  wrapperClassNames += show ? ' flex' : ' hidden';

  return (
    <div className="relative group">
      {children}
      <div className={wrapperClassNames}>
        {['right', 'bottom'].includes(position) && <div className={arrowClassNames}></div>}
        <div className={contentClassNames}>
          {content}
        </div>
        {['left', 'top'].includes(position) && <div className={arrowClassNames}></div>}
      </div>
    </div>
  );
};

export default ToolTip;
