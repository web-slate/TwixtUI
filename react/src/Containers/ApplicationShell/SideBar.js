import React, { useState } from 'react';
import TwixtButton from '../../CallsToAction/Button';
import TwixtFlexBox from '../FlexBox';

import { BsLayoutSidebar } from "react-icons/bs";

function ApplicationShellSideBar({ width = 'w-64', collapsedWidth = 'w-16', collapsed = false, expandedNode = null, collpasedNode = null, additionalBottomButtons = null, onToggle }) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };

  return (
    <TwixtFlexBox>
      <aside
        className={`group fixed top-0 left-0 z-40 h-screen pt-14 transition-all duration-300 bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${isCollapsed ? collapsedWidth : width
          }`}
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
          {!isCollapsed ? expandedNode : collpasedNode}
        </div>
        {collpasedNode != null && <div
          className={`absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full flex ${isCollapsed ? 'bg-transparent' : 'bg-white dark:bg-gray-800'
            } z-20`}
        >
          <TwixtButton
            leftIcon={<BsLayoutSidebar size="20" />}
            hideLabel={true}
            overwriteClass="bg-transparent hover:bg-gray-100 p-2"
            onClick={toggleSidebar}
          />
          {!isCollapsed && additionalBottomButtons}
        </div>}
      </aside>
    </TwixtFlexBox>
  );
}

export default ApplicationShellSideBar;