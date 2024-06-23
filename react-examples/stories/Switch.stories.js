import React from 'react';
import TwixtSwitch from '../../react/src/Switch.js';

export default {
  title: 'Common/TwixtSwitch',
  component: TwixtSwitch,
  argTypes: {
    label: { control: 'text' },
    onChange: { action: 'changed' }, // action to log changes
  },
  docs: {
    description: {
      component: 'This component is a toggle switch used to toggle between on and off states.',
    },
  },
};

// Template function to create stories
const Template = (args) => <TwixtSwitch {...args} />;

// DefaultSwitch story
export const DefaultSwitch = Template.bind({});
DefaultSwitch.args = {
  label: 'Toggle Switch',
};
DefaultSwitch.parameters = {
  docs: {
    storyDescription: 'This is the default `TwixtSwitch` component.',
  },
};

// CustomLabel story
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Custom Label',
};
CustomLabel.parameters = {
  docs: {
    storyDescription: 'This is a `TwixtSwitch` component with a custom label.',
  },
};
