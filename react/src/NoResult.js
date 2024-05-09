import React from 'react'

const NoResult = ({message ='No Result Found.'}) => {
  return (
    <div className="flex items-center justify-center h-40">
        <p className="text-gray-950 ffont-normal">{message}</p>
    </div>
  )
}

export default NoResult
