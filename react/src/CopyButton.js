import React from 'react'

export default function CopyButton({data, btnName = "CopyButton", overwriteClass}) {
  const handleCopy = (data) => {
      navigator.clipboard.writeText(data)
  }

  const buttonClasses = overwriteClass ? overwriteClass : 'py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg';

  return (
    <div>    
      <button className={buttonClasses} onClick={() => handleCopy(data)}> {btnName} </button>
    </div>
  );
}
