import React from 'react';

function FlexBox({
  direction = 'row',
  grow = false,
  shrink = false,
  wrap = false,
  rowGap = '0',
  columnGap = '0',
  alignItems = 'stretch',
  justifyContent = 'start',
  alignSelf = 'auto',
  children,
  overwriteClass = '',
}) {
  const flexClasses = `
    flex
    ${direction === 'column' ? 'flex-col' : 'flex-row'}
    ${grow ? 'flex-grow' : ''}
    ${shrink ? 'flex-shrink' : ''}
    ${wrap ? 'flex-wrap' : ''}
    ${rowGap !== '0' ? `gap-y-${rowGap}` : ''}
    ${columnGap !== '0' ? `gap-x-${columnGap}` : ''}
    ${alignItems ? `items-${alignItems}` : ''}
    ${justifyContent ? `justify-${justifyContent}` : ''}
    ${alignSelf ? `self-${alignSelf}` : ''}
    ${overwriteClass}
  `.trim().replace(/\s+/g, ' ');

  return <div className={flexClasses}>{children}</div>;
}

export default FlexBox;
