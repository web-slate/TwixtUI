import React from 'react';

import ApplicationShellHeaderSearchBar from './SearchBar';
import ApplicationShellHeaderUserPopover from './Popover/UserPopover';
import ApplicationShellHeaderAppsPopover from './Popover/AppPopover';
import ApplicationShellHeaderNotificationPopover from './Popover/NotificationPopover';

function ApplicationShellHeader() {
  return (<><nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex justify-start items-center">
        <a href="#" className="flex items-center justify-between mr-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Application</span>
        </a>
        <ApplicationShellHeaderSearchBar />
      </div>
      <div className="flex items-center gap-6 lg:order-2">
        <button
          type="button"
          data-drawer-toggle="drawer-navigation"
          aria-controls="drawer-navigation"
          className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Toggle search</span>
          <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
          </svg>
        </button>
        <ApplicationShellHeaderNotificationPopover />
        <ApplicationShellHeaderAppsPopover />
        <ApplicationShellHeaderUserPopover />
      </div>
    </div>
  </nav></>)
}

export default ApplicationShellHeader;
