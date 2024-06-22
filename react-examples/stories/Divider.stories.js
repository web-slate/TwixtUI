import React from 'react';
import TwixtDivider from '../../react/src/Divider.js';

// Default export to define the title and component
export default {
  title: 'Common/TwixtDivider', // Title of the storybook section
  component: TwixtDivider, // Component being documented
  argTypes: {
    gap: {
      control: 'text', // Control type for gap prop (text input)
      description: 'CSS classes to apply margin and padding to the divider', // Description of the prop
      defaultValue: 'mt-4', // Default value for the gap prop
    },
  },
};

// Template function for creating story instances
const Template = (args) => <TwixtDivider {...args} />;

// Define a primary story for the component
export const Default = Template.bind({});
Default.args = {
  gap: 'mt-4', // Default value for gap prop
};

// Define a story with a custom gap
export const CustomGap = Template.bind({});
CustomGap.args = {
  gap: 'mt-8 mb-8', // Custom value for gap prop
};
