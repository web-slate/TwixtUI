import React from 'react';
import OneSelectDropdown from '../../react/src/OneSelectDropdown.js';

export default {
  title: 'Common/TwixtOneSelectDropdown',
  component: OneSelectDropdown,
  argTypes: {
    button: { control: 'text' },
    links: { control: 'array' },
    className: { control: 'text' },
  },
  docs: {
    description: {
      component: 'This component represents a dropdown with radio buttons allowing single selection.',
    },
  },
};

// Template function to create stories
const Template = (args) => <OneSelectDropdown {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  button: 'Dropdown',
  links: ['Option 1', 'Option 2', 'Option 3'],
  className: '',
};
Default.parameters = {
  docs: {
    storyDescription: 'This is the default `OneSelectDropdown` component with a button labeled "Setting" and three options.',
  },
};



// Custom Class Name story
export const CustomClassName = Template.bind({});
CustomClassName.args = {
  button: 'Select Gender',
  links: ['Male', 'Female'],
  className: 'custom-dropdown-class',
};
CustomClassName.parameters = {
  docs: {
    storyDescription: 'This `OneSelectDropdown` component has a custom class name applied to the button.',
  },
};
