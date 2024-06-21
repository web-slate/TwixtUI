import React, { useState, useEffect } from 'react'

export default function TwixtCheckbox({ checked = true, label, onChange = () => { } }) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    onChange();
  };

  return (
    <label className="inline-flex items-center space-x-3">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
}
