import React from 'react';

function BoxItem({ type = 'block', children, overwriteClass = '' }) {
  if (type == 'block') {
    return <div className={overwriteClass}>{children}</div>;
  } else if (type == 'inline') {
    return <span className={overwriteClass}>{children}</span>;
  }

  return null;
}

export default BoxItem;
