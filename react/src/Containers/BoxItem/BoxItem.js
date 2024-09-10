import React from 'react';

function BoxItem({ type = 'block', children, overwriteClass = '', ...props }) {
  if (type == 'block') {
    return <div className={overwriteClass} {...props}>{children}</div>;
  } else if (type == 'inline') {
    return <span className={overwriteClass} {...props}>{children}</span>;
  }

  return null;
}

export default BoxItem;
