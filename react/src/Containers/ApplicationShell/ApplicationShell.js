import React, { useState } from 'react';

import TwixtApplicationShellHeader from './Header/Header';
import TwixtApplicationShellSideBar from './SideBar';
import TwixtApplicationShellBody from './MainBody';
import TwixtStackBox from '../StackBox';
import TwixtBoxItem from '../BoxItem';
import TwixtFlexBox from '../FlexBox';

function ApplicationShell({
  header = {},
  sidebar = {},
  body = {}
}) {
  const { left: headerLeft, center: headerCenter, right: headerRight } = header;
  const { expandedNode, collpasedNode, additionalBottomButtons } = sidebar;
  const { pageTitle, content } = body;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <TwixtStackBox overwriteClass="vertical">
      <TwixtApplicationShellHeader left={headerLeft} center={headerCenter} right={headerRight} />
       <TwixtFlexBox direction="row" grow={true} appendClass="overflow-hidden">
        <TwixtApplicationShellSideBar expandedNode={expandedNode} collpasedNode={collpasedNode} additionalBottomButtons={additionalBottomButtons} onToggle={toggleSidebar} />
        <TwixtApplicationShellBody pageTitle={pageTitle} appendClass={`${isCollapsed ? 'ml-16' : 'ml-64'}`} content={content} />
      </TwixtFlexBox>
    </TwixtStackBox>
  );
}

export default ApplicationShell;
