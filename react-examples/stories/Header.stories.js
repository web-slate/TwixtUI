import React from 'react';
import TwixtHeader from '../../react/src/Header.js';

export default {
  title: 'Common/TwixtHeader',
  component: TwixtHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    announceMent: {
      control: {
        type: 'object',
      },
    },
    headerClass: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    rightBlock: {
      control: {
        type: 'text',
      },
    },
    onHamburgerClick: { action: 'clicked' },
  },
};

const Template = (args) => <TwixtHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  announceMent: {
    title: 'Announcement Title',
    desc: 'Announcement Description',
  },
  headerClass: 'bg-gray-200', // Example class for header styling
  children: '<h1>Twixt Header</h1>', // Example children component
  rightBlock: '<button>Button</button>', // Example right block content
  onHamburgerClick: () => {console.log('Hamburger clicked')},
};
