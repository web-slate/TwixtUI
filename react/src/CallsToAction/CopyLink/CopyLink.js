import React, { useState } from 'react';
import TwixtLink from '../Link/Link';

const CopyLink = ({
  link = '#', 
  overwriteClass = '',
  leftIcon='', 
  successMessage = 'Link copied!',
  label, 
}) => {
  const [ showCopymsg, setShowCopyMsg ] = useState(false)
  const handleCopyClick = async (e)=>{
    e.preventDefault()
    try{
      await navigator.clipboard.writeText(link)
      setShowCopyMsg(true)
      setTimeout(()=>{
        setShowCopyMsg(false)
      },3000)
    }
    catch(error){
      console.log('Failed to copy link',error)
    }
  }
  return (
    <div className='relative inline-block'>
      {showCopymsg && (
        <div className='absolute bottom-full mb-2 text-sm text-white bg-green-500 rounded px-2 py-1'>
          {successMessage}
        </div>
      )}
        <TwixtLink
        onClick={handleCopyClick}
        link={link}
        label={label}
        overwriteClass={overwriteClass}
        leftIcon={leftIcon}
      />
    </div>
  )
}

export default CopyLink
  




