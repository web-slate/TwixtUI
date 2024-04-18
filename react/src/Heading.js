import React from 'react'

export default function TwixtHeading({ type = "h6", children }) {
  switch(type) {
    case 'h1':
      return <h1 className="text-4xl font-bold text-gray-900">{children}</h1>;
    case 'h2':
      return <h2 className="text-3xl font-bold text-gray-800">{children}</h2>;
    case 'h3':
      return <h3 className="text-2xl font-bold text-gray-700">{children}</h3>;
    case 'h4':
      return <h4 className="text-xl font-semibold text-gray-600">{children}</h4>;
    case 'h5':
      return <h5 className="text-lg font-medium text-gray-500">{children}</h5>;
    case 'h6':
      return <h6 className="text-base font-normal text-gray-400">{children}</h6>;
  }

  return <h1>{children}</h1>;
}
