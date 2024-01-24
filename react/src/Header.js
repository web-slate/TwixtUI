import React from 'react'

const noop = () => {};

export default function TwixtHeader({ headerClass, children, rightBlock, onHamburgerClick = noop }) {
  return (
    <header className={`flex justify-between items-center ${headerClass} p-4`}>
      <div className="flex">
        <button
          className="bg-slate-800 text-slate-100 rounded-full pr-2" onClick={onHamburgerClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLineCap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {children}
      </div>
      <div className="flex">{rightBlock}</div>
    </header>
  );
}
