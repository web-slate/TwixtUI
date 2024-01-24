import React, { useState } from 'react'

export default function TwixtCheckbox({ onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
      className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
    />
  );
}