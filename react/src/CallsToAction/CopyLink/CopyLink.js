import React from 'react'; // Correct import statement
import TwixtLink from '../Link/Link'; // Adjust the path as needed

export default function CopyLink(props) {
  const handleCopyClick = (e) => {
    e.preventDefault();
    if (props.onClick) {
      props.onClick(e);
    }
    navigator.clipboard.writeText(props.link).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    <TwixtLink
      {...props}
      onClick={handleCopyClick}
    />
  );
}
