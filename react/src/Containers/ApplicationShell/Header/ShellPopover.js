import React from 'react';
import TwixtPopover from '../../Popover';
import TwixtBoxItem from '../../../Containers/BoxItem';

function ApplicationShellPopover({ title, hideTitle, content, popoverContent, popoverPosition = 'bottom-right'}) {
  return (
    <TwixtBoxItem overwriteClass="relative inline-block text-left">
      <TwixtPopover
        overwriteContentClass="w-80 list-none bg-white rounded shadow-lg rounded-xl"
        title={title}
        hideTitle={hideTitle}
        hideOnBlur={false}
        content={popoverContent}
        position={popoverPosition}
      >
        {content}
      </TwixtPopover>
    </TwixtBoxItem>
  );
}

export default ApplicationShellPopover;
