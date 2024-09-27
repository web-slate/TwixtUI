import React, { useState } from 'react';

function ToggleButton({ toggled=true, onIcon, offIcon, overwriteClass, onClick, appendClass = '' }) {
    const [toggle, setToggle] = useState(toggled)
    const buttonClasses = overwriteClass || 'px-2 py-1 rounded-md cursor-pointer inline-block '+ appendClass;
    const initialOffIcon = offIcon ? offIcon: <span className='text-2xl'>&#9734;</span>;
    const initialOnIcon = onIcon ? onIcon: <span className='text-2xl'>&#9733;</span>;

    const handleToggle =(e)=>{
        e.preventDefault();
        setToggle(!toggle)
        if(onClick){
          onClick();
        }
    }
  return(
    <div className={buttonClasses.trimEnd()} onClick={handleToggle}>
        {toggle ? initialOffIcon: initialOnIcon}
    </div>
  )
}
export default ToggleButton
