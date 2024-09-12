import React from 'react';
import TwixtPopoverButton from '../../react/src/_deprecated/Popover';

// Default export to define the title and component
export default {
  title: 'Common/TwixtPopoverButton',
  component: TwixtPopoverButton,
  argTypes: {
    buttonText: {
      control: 'text',
      description: 'Text displayed on the button',
      defaultValue: 'Click to popover',
    },
    title: {
      control: 'text',
      description: 'Title displayed in the popover',
      defaultValue: 'Default Title',
    },
    content: {
      control: 'text',
      description: 'Content displayed in the popover',
      defaultValue: 'Default Content',
    },
  },
};

// Template function for creating story instances
const Template = (args) => <TwixtPopoverButton {...args} />;

// Define a primary story for the component
export const Default = Template.bind({});
Default.args = {
  buttonText: 'Click to popover',
  title: 'Default Title',
  content: 'Default Content',
};

// Define a story with custom text, title, and content
export const CustomPopover = Template.bind({});
CustomPopover.args = {
  buttonText: 'Show Popover',
  title: 'Custom Title',
  content: 'This is some custom content inside the popover.',
};
