import React from 'react'

export default function TwixModal({ title = '', children, footer }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        {/* Modal Overlay */}
        <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-20 transition-opacity"
            style={{ transition: 'opacity 300ms ease-out' }}
          ></div>

          {/* Modal Content */}
          <div
            className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50"
            style={{ transition: 'transform 300ms ease-out' }}
          >
            {/* Modal Header */}
            <div className="bg-indigo-500 text-white px-4 py-2 flex justify-between">
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              {children}
            </div>

            {/* Modal Footer */}
            <div className="border-t px-4 py-2 flex justify-end">
              {footer}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}