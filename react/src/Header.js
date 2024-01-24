import React, { useState } from 'react'
import { ToolName } from 'TwixtUI/react'

function TwixtHeader({ children }) {
  return (
    <header className="flex justify-between items-center bg-blue-300 p-4">
      <div className="flex">
        <button
          className="bg-slate-800 text-slate-100 rounded-full pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {children}
      </div>
      <div className="flex">Right</div>
    </header>
  );
}

export default function Header() {
  return (
    <TwixtHeader>
      <ToolName name="Twixt UI React App" />
    </TwixtHeader>
  );
}