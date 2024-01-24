import React from 'react'

export default function TwixtButton({ children, onClick }) {
  return (
    <button onClick={() => setOpen(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-md">
      {children}
    </button>
  );
}