import React from 'react'

const Link = ({ href, text, className }) => {
  return (
    <div>
       <a href={href} className={`inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
            {text}
        </a>
    </div>
  )
}

export default Link
