import React, { useState } from 'react';

export function LeftSideBar({ overWriteClasses, canOpen = false }) {
  const [isOpen, setIsOpen] = useState(canOpen);

  const leftSidebarClass = overWriteClasses ? overWriteClasses : 'flex w-72 h-full bg-pink-500';

  return (
    <nav className={leftSidebarClass}>
      <div className="w-full flex mx-auto px-6 py-8">
        <div className="flex">
          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 transform bg-blue-800 text-white w-64 p-6 space-y-6 z-30 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
          >
            {/* Links */}
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Home</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">About</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Services</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Contact</a>
          </div>

          {/* Content */}
          <div className="flex-1 p-10 text-2xl font-bold">
            <button onClick={() => setIsOpen(!isOpen)} className="mb-4">
              {isOpen ? 'Close Menu' : 'Open Menu'}
            </button>
            {/* Your content goes here */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function RightSideBar({ overWriteClasses, children }) {
  const rightSidebarClass = overWriteClasses ? overWriteClasses : 'flex w-72 h-full bg-yellow-400';

  return (
    <nav className={rightSidebarClass}>
      <div className="w-full flex mx-auto px-6 py-8">
        <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900">{children}</div>
      </div>
    </nav>
  );
}

export function ContentPane({ overWriteClasses, children }) {
  const contentPaneClass = overWriteClasses ? overWriteClasses : 'flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14';

  return (
    <main className={contentPaneClass}>
      <div className="flex w-full mx-auto px-6 py-8">
        <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
          {children}
        </div>
      </div>
    </main>
  );
}