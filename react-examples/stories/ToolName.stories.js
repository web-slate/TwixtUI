import React from 'react';
import TwixtToolName from '../../react/src/ToolName';

// Default export to define the title and component
export default {
  title: 'Common/TwixtToolName',
  component: TwixtToolName,
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the tool',
      defaultValue: 'Tool Name',
    },
    status: {
      control: 'select',
      options: ['down', 'deprecated', 'christmas', 'newyear'],
      description: 'Status of the tool',
      defaultValue: 'down',
    },
    emoji: {
      control: 'text',
      description: 'Emoji associated with the tool',
      defaultValue: '',
    },
    slogan: {
      control: 'text',
      description: 'Slogan or additional text',
      defaultValue: 'Powered by Tailwind',
    },
  },
};

// Template function for creating story instances
const Template = (args) => <TwixtToolName {...args} />;

// Define a primary story for the component
export const Default = Template.bind({});
Default.args = {
  name: 'Tool Name',
  status: 'down',
  emoji: '',
  slogan: 'Powered by Tailwind',
};
