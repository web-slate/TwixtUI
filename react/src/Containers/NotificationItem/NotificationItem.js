import React from 'react'

import TwixtLink from '../../CallsToAction/Link';
import TwixtBoxItem from '../BoxItem';

const NotificationItem = ({ leftContent, name, message, time }) => {
  return (
    <TwixtLink overwriteClass="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
      {leftContent != null && <TwixtBoxItem overwriteClass="flex-shrink-0">
        {leftContent}
      </TwixtBoxItem>}
      <TwixtBoxItem overwriteClass="ml-3 w-full">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">{name}</span> {message}
        </p>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{time}</p>
      </TwixtBoxItem>
    </TwixtLink>
  );
};

export default NotificationItem
