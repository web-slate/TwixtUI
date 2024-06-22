import React from 'react';
import TwixtTextArea from '../../react/src/TextArea';

// Default export to define the title and component
export default {
  title: 'Common/TwixtTextArea',
  component: TwixtTextArea,
  argTypes: {
    value: {
      control: 'text',
      description: 'Initial value of the textarea',
      defaultValue: 'Default text',
    },
  },
};

// Template function for creating story instances
const Template = (args) => <TwixtTextArea {...args} />;

// Define a primary story for the component
export const Default = Template.bind({});
Default.args = {
  value: 'Default text',
};

// Define a story with custom value
export const CustomValue = Template.bind({});
CustomValue.args = {
  value: 'This is a custom text area content.',
};
