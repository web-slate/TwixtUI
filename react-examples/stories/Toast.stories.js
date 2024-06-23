
import React from 'react';
import TwixtToast from '../../react/src/Toast';

export default {
  title: 'Common/TwixtToast',
  component: TwixtToast,
};

// Template for the component
const Template = (args) => <TwixtToast {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  title: 'header',
  content: 'you clicked',
};

// Custom title and content story
export const CustomToast = Template.bind({});
CustomToast.args = {
  title: 'Custom Header',
  content: 'This is a custom toast message!',
};
