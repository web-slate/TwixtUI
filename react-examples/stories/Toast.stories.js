import React from 'react';
import ToolName from './ToolName';

export default {
  title: 'Components/TwixtToolName',
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

// Define stories
export const Default = Template.bind({});
Default.args = {
  name: 'Tool Name',
  status: 'down',
  emoji: '',
  slogan: 'Powered by Tailwind',
};

export const Deprecated = Template.bind({});
Deprecated.args = {
  name: 'Tool Name',
  status: 'deprecated',
  emoji: '⚠️',
  slogan: 'Powered by Tailwind',
};

export const ChristmasTheme = Template.bind({});
ChristmasTheme.args = {
  name: 'Tool Name',
  status: 'christmas',
  emoji: '🎄',
  slogan: 'Powered by Tailwind',
};

export const NewYearTheme = Template.bind({});
NewYearTheme.args = {
  name: 'Tool Name',
  status: 'newyear',
  emoji: '🎆',
  slogan: 'Powered by Tailwind',
};

export const NoEmoji = Template.bind({});
NoEmoji.args = {
  name: 'Tool Name',
  status: 'down',
  emoji: '',
  slogan: 'Powered by Tailwind',
};

export const NoSlogan = Template.bind({});
NoSlogan.args = {
  name: 'Tool Name',
  status: 'down',
  emoji: '',
  slogan: '',
};

export const CustomEmoji = Template.bind({});
CustomEmoji.args = {
  name: 'Tool Name',
  status: 'down',
  emoji: '🔧',
  slogan: 'Powered by Tailwind',
};

export const CustomNameAndEmoji = Template.bind({});
CustomNameAndEmoji.args = {
  name: 'Custom Tool',
  status: 'down',
  emoji: '🔩',
  slogan: 'Powered by Tailwind',
};
