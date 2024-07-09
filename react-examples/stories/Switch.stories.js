import React from 'react';

import TwixtSwitch from "../../react/src/Switch.js"


// Default export to define the title and component
export default {
  title: 'Common/TwixtSwitch',
  component: TwixtSwitch,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the switch',
      defaultValue: 'Toggle Switch',
    },
    onChange: {
      action: 'changed',
      description: 'Function to call when switch state changes',
    },
  },
};

// Template function for creating story instances
const Template = (args) => <TwixtSwitch {...args} />;

// Define a primary story for the component
export const Default = Template.bind({});
Default.args = {
  label: 'Toggle Switch',
};

// Define a story with a custom label
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Custom Label',
};

