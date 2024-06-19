import React from 'react'
import TwixtAlert from './Alert'

const noop = () => { };

export default function TwixtHeader({ announceMent, headerClass, children, rightBlock, onHamburgerClick = noop }) {
  return (
    <>
      {announceMent && (
        <TwixtAlert title={announceMent.title} desc={announceMent.desc} />
      )}
      <header className={`flex justify-between items-center ${headerClass} p-4`}>
        <div className="flex">
          <button
            className="text-slate-100" onClick={onHamburgerClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLineCap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {children}
        </div>
        <div className="flex">{rightBlock}</div>
      </header>
    </>
  );
}