import React from 'react';
import TwixtTooltip from '../../../react/src/_deprecated/Tooltip';

export default {
  title: '_Deprecated/TwixtToolTip_DEPRECATED',
  component: TwixtTooltip,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the tooltip',
      defaultValue: 'Tooltip Content',
    },
    children: {
      control: null,
      description: 'Child element triggering the tooltip',
      defaultValue: 'Hover me',
    },
  },
};

// Template function for creating story instances
const Template = (args) => <TwixtTooltip {...args} />;

// Define stories
export const Default = Template.bind({});
Default.args = {
  text: 'Tooltip Content',
  children: 'Hover me',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  text: 'Custom Tooltip Content',
  children: 'Hover me',
};

export const NoChildren = Template.bind({});
NoChildren.args = {
  text: 'Tooltip Content',
  children: '',
};

export const LongText = Template.bind({});
LongText.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lectus non sapien convallis fringilla ut sed risus. Integer congue, justo nec sagittis ullamcorper, odio arcu posuere lacus, quis pharetra risus erat vel urna.',
  children: 'Hover me',
};

export const EmojiTrigger = Template.bind({});
EmojiTrigger.args = {
  text: 'Tooltip Content',
  children: '🛠️',
};

