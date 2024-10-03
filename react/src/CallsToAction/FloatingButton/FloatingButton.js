import React from 'react';

function FloatingButton({ children, vertical = 'bottom', horizontal = 'fixed bottom-4 right-4' , overwriteClass, appendClass }) {
  const buttonClasses = overwriteClass || 'inline-flex items-center gap-4 '+ appendClass;
  if (vertical === 'bottom' && horizontal === 'left') {
    return <div className="fixed bottom-4 left-4">
      {children}
    </div>
  }

  else if (vertical === 'top' && horizontal === 'right') {
    return <div className="fixed top-4 right-4">
      {children}
    </div>
  }

  else if (vertical === 'top' && horizontal === 'left') {
    return <div className="fixed top-4 left-4">
      {children}
    </div>
  }
  else if (vertical === 'middle' && horizontal === 'center') {
    return <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  }

  return (<div className={buttonClasses.trimEnd()}>
    {children}
  </div>);
}

export default FloatingButton
