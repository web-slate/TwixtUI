import React, { useState } from 'react';
import TwixtToolTip from '../../Communications/ToolTip';
import TwixtLink from '../Link/Link';

const CopyLink = ({
  link = '#', 
  overwriteClass = '',
  leftIcon='', 
  rightIcon='',
  successMessage = 'Link copied!',
  label, 
}) => {
  const [ showCopymsg, setShowCopyMsg ] = useState(false);

  const handleCopyClick = async (e) => {
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
     <TwixtToolTip content={successMessage} show={showCopymsg} position="top">
        <TwixtLink
        onClick={handleCopyClick}
        link={link}
        label={label}
        overwriteClass={overwriteClass}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      />
      </TwixtToolTip>
    </div>
  )
}

export default CopyLink