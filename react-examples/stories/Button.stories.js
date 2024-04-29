import { fn } from '@storybook/test';
import React from 'react';
import TwixtButton from '../../react/src/Button.js';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Common/TwixtButton',
  component: TwixtButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onClick: {
      action: 'clicked', // onClick prop is an action to simulate button clicks
      description: 'Function to be called when the button is clicked', // Description of the prop
    },
    children: {
      type: { name: 'string', required: true }, // children prop is a required string
      description: 'The content of the button', // Description of the prop
      defaultValue: 'Button', // Default value if not provided
    },
    overwriteClass: {
      type: { name: 'string' },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },

};
const Template = (args) => <TwixtButton {...args} />;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultButton = Template.bind({});
DefaultButton.args = {};

// Story 2: Button with Custom Text
export const ButtonWithCustomText = Template.bind({});
ButtonWithCustomText.args = {
  children: 'Click me!', // Custom text
};

export const Example = {
  args: {
    children: 'Clickme',
    desc: 'max-w-2xl mx-auto px-4 flex justify-between items-center mb-6',
    overwriteClass: 'px-4 py-2 bg-indigo-500 text-white rounded-md',
    type:"h2"
  },
}


