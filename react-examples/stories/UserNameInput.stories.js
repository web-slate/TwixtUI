import React from 'react';
import TwixtUserNameInput from '../../react/src/UserNameInput.js';

export default {
  title: 'Common/TwixtUserNameInput',
  component: TwixtUserNameInput,
  argTypes: {
    value: { control: 'text' },
  },
  docs: {
    description: {
      component: 'This component is an input field for the user name with validation for empty input and minimum length.',
    },
  },
};

// Template function to create stories
const Template = (args) => <TwixtUserNameInput {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  value: '',
};
Default.parameters = {
  docs: {
    storyDescription: 'This is the default `TwixtUserNameInput` component.',
  },
};

// With Initial Value story
export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  value: 'John',
};
WithInitialValue.parameters = {
  docs: {
    storyDescription: 'This `TwixtUserNameInput` component has an initial value.',
  },
};
