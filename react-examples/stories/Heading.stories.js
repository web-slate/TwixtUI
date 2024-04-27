import React from 'react';
import TwixtHeading from '../../react/src/Heading';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Common/TwixtHeading',
  component: TwixtHeading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text' }, // Allows you to input text for children in Storybook's Controls panel
    type: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    children: 'Default Heading', // Default text for children
    type: 'h1'
  },
};

// Template that uses args for the children and type properties
const TwixtHeadingTemplate = (args) => <TwixtHeading {...args} />;
export const Heading1 = TwixtHeadingTemplate.bind({});
Heading1.args = {
  type: 'h1',
  children: 'Heading1',
};

export const Heading2 = TwixtHeadingTemplate.bind({});
Heading2.args = {
  type: 'h2',
  children: 'Heading2',
};
