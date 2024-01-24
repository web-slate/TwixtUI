import React from 'react';

const TwixtTextArea = ({ value }) => {
  return (
    <textarea className="resize rounded-md">{value}</textarea>
  );
};

export default TwixtTextArea;
