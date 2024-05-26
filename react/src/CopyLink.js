import React, { useState, useRef } from 'react';

// Tooltip component
const Tooltip = ({ message, tooltipClass }) => (
  <span className={tooltipClass}>
    {message}
  </span>
);

const CopyLink = ({ text, url, overwriteClass, overwriteTooltipClass }) => {
  const [tooltipMessage, setTooltipMessage] = useState('Copy to Clipboard');
  const linkRef = useRef(null);

  const handleCopy = (e) => {
    e.preventDefault();
    const link = linkRef.current.href;

    navigator.clipboard.writeText(link).then(() => {
      setTooltipMessage(`Copied ${link}`);
      setTimeout(() => setTooltipMessage('Copy to Clipboard'), 2000); 
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const linkClass = overwriteClass ? overwriteClass : 'text-blue-500 underline';
  const tooltipClass = overwriteTooltipClass ? overwriteTooltipClass : 'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-white bg-black rounded text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100';


  return (
    <div>
      <a 
        href={url} 
        ref={linkRef} 
        onClick={handleCopy}
        className={linkClass}
      >
        {text}
      </a>
      <Tooltip message={tooltipMessage} tooltipClass={tooltipClass}/>
    </div>
  );
};

export default CopyLink;
