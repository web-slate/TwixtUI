import React, { useState } from 'react'

function ToggleButton({ onIcon, offIcon, overwriteClass}) {
    const [toggle, setToggle] = useState(true)

    const buttonClasses = overwriteClass || 'px-2 py-2 rounded-md cursor-pointer';
    const handleToggle =(e)=>{
        setToggle(!toggle)
    }
  return(
    <div className={`${buttonClasses}`} onClick={handleToggle}>
        {toggle ? onIcon: offIcon}
    </div>
  )
}
export default ToggleButton
