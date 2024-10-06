import React from 'react';

function BoxItem({ type = 'block', children, appendClass = '', overwriteClass = '', ...props }) {
  const itemClasses = overwriteClass != '' ? overwriteClass : `${appendClass}`;

  if (type == 'block') {
    return <div className={itemClasses} {...props}>{children}</div>;
  } else if (type == 'inline') {
    return <span className={itemClasses} {...props}>{children}</span>;
  }

  return null;
}

export default BoxItem;
