
import React from 'react';
import TwixtToast_DEPRECATED from '../../react/src/_deprecated/Toast';

export default {
  title: 'Common/TwixtToast',
  component: TwixtToast_DEPRECATED,
};

// Template for the component
const Template = (args) => <TwixtToast_DEPRECATED {...args} />;

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
