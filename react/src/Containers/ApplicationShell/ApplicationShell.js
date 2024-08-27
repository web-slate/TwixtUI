import React from 'react';

import TwixtApplicationShellHeader from './Header/Header';
import TwixtApplicationShellSideBar from './SideBar';
import TwixtApplicationShellBody from './MainBody';

function ApplicationShell() {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <TwixtApplicationShellHeader />
      <TwixtApplicationShellSideBar />
      <TwixtApplicationShellBody />
    </div>
  );
}

export default ApplicationShell;
