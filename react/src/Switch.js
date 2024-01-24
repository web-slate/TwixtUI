import React, { useState } from 'react';

const TwixtSwitch = ({ label, onChange }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange(!isOn);
  };

  return (
    <>
      <label htmlFor="toggle" className="text-xs text-gray-700">{label}</label>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input type="checkbox" name="toggle" id="toggle" className="twixt-toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" checked={isOn}
          onChange={toggleSwitch} />
        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
    </>
  );
};

export default TwixtSwitch;
