import React from 'react';

import TwixtTabs from '../../../react/src/Navigation/Tabs';
import TwixtIcon from '../../../react/src/Icon';
import TwixtBadge from '../../../react/src/Communications/Badge';

export default {
  title: 'List/TwixtTabs',
  component: TwixtTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
  },
};

// Default Horizontal Tabs
export const DefaultHorizontal = () => {
  const items = [
    { label: 'Tab 1', content: 'This is the content for Tab 1.' },
    { label: 'Tab 2', content: 'This is the content for Tab 2.' },
    { label: 'Tab 3', content: 'This is the content for Tab 3.' },
  ];

  return <TwixtTabs items={items} direction="horizontal" />;
};

// Vertical Tabs
export const VerticalTabs = () => {
  const items = [
    { label: 'Tab 1', content: 'This is the content for Tab 1.' },
    { label: 'Tab 2', content: 'This is the content for Tab 2.' },
    { label: 'Tab 3', content: 'This is the content for Tab 3.' },
  ];

  return <TwixtTabs items={items} direction="vertical" />;
};

// Default Active Tab
export const DefaultActiveTab = () => {
  const items = [
    { label: 'Tab 1', content: 'This is the content for Tab 1.' },
    { label: 'Tab 2', content: 'This is the content for Tab 2.' },
    { label: 'Tab 3', content: 'This is the content for Tab 3.' },
  ];

  return <TwixtTabs items={items} direction="horizontal" defaultActiveTab={1} />;
};

// Tabs with Icons
export const TabsWithIcons = () => {
  const items = [
    {
      label: 'Inbox',
      content: 'This is the content for Tab 1.',
      rightIcon: () => (
        <TwixtBadge
          status="active"
          value="99+"
        />
      ),
    },
    {
      label: 'Hub',
      content: 'This is the content for Tab 2.',
      leftIcon: () => (
        <TwixtIcon type="home" variant="outline" size={18} />
      ),
    },
    {
      label: 'Terminal',
      content: 'This is the content for Tab 3.',
      leftIcon: () => (
        <TwixtIcon type="terminal" variant="filled" size={18} />
      ),
    },
    {
      label: 'Notifications',
      content: 'This is the content for Tab 4.',
      rightIcon: () => (
        <TwixtIcon type="notification" variant="filled" size={18} />
      ),
    },
  ];

  return <TwixtTabs items={items} direction="horizontal" />;
};

