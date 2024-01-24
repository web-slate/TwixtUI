import React, { useState } from 'react'
import { ToolName } from 'TwixtUI/react'

function TwixtHeader({ children }) {
    const headingContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
      //,
      //height: '100vh', // Optionally, set a height for vertical centering    
  };

    const centerHeadingStyle = {
      textAlign: 'center',
      // Add any additional styling you may need for your headings
    }; 

  return (
    <header className="flex justify-between items-center bg-blue-300 p-4">
      {/*<div className="flex">*/}
      <div style={headingContainerStyle}>
      <h1 style={centerHeadingStyle}>Heading 1</h1>
      <h2 style={centerHeadingStyle}>Heading 2</h2>
      <h3 style={centerHeadingStyle}>Heading 3</h3>
      <h4 style={centerHeadingStyle}>Heading 4</h4>
      <h5 style={centerHeadingStyle}>Heading 5</h5>
      <h6 style={centerHeadingStyle}>Heading 6</h6>
    </div>
        {/*
         <button
          className="bg-slate-800 text-slate-100 rounded-full pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {children}
  
      </div>*/}
      {/*<div className="flex">Right</div> */}
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