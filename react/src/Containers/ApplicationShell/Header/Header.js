import React from 'react';

import ApplicationShellHeaderSearchBar from './SearchBar';
import ApplicationShellHeaderUserPopover from './Popover/UserPopover';
import ApplicationShellHeaderAppsPopover from './Popover/AppPopover';
import ApplicationShellHeaderNotificationPopover from './Popover/NotificationPopover';

import TwixtBoxItem from '../../BoxItem';
import TwixtFlexBox from '../../FlexBox';
import ApplicationShellPopover from './ShellPopover';

function ApplicationShellHeader({ left, center, right }) {
  const rightMenuBar = right?.menuBar || [];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <TwixtBoxItem className="flex flex-wrap justify-between items-center">
        <TwixtFlexBox alignItems="center">
          <TwixtBoxItem overwriteClass="min-w-[240px]">
            {left}
          </TwixtBoxItem>
          {center}
        </TwixtFlexBox>
        <TwixtFlexBox alignItems="center" rowGap="6" columnGap="6" appendClass="lg:order-2">
          {rightMenuBar.map((menuItem) => {
            return <ApplicationShellPopover key={menuItem.id} title={menuItem.title} hideTitle={menuItem.hideTitle} content={menuItem.content} popoverContent={menuItem.popoverContent} />
          })}
        </TwixtFlexBox>
      </TwixtBoxItem>
    </nav>
  );
}

export default ApplicationShellHeader;
