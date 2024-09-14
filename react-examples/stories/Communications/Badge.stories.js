import React from 'react';
import TwixtBadge from '../../../react/src/Communications/Badge';
import TwixtIcon from '../../../react/src/Icon';

export default {
  title: 'Communications/TwixtBadge',
  component: TwixtBadge,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    status: { 
      control: 'select', 
      options: ['default', 'active', 'success', 'error', 'warning', 'yellow', 'magenta', 'purple', 'teal', 'cyan'],
    },
    overwriteClass: { control: 'text' },
    type: { 
      control: 'select', 
      options: ['block', 'inline'],
    },
  },
};

const Template = (args) => <TwixtBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Default Label',
  status: 'default',
};

export const Active = Template.bind({});
Active.args = {
  value: 'Active',
  status: 'active',
};

export const Success = Template.bind({});
Success.args = {
  value: 'Success',
  status: 'success',
};

export const Error = Template.bind({});
Error.args = {
  value: 'Error',
  status: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  value: 'Warning',
  status: 'warning',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  value: 'User',
  status: 'success',
  leftIcon: <TwixtIcon type="user" variant="filled" size="16" color="#ffff" />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  value: 'Delete',
  status: 'error',
  rightIcon: <TwixtIcon type="delete" variant="filled" size="16" color="#ffff" />,
};

export const BlockType = Template.bind({});
BlockType.args = {
  value: 'Block',
  status: 'success',
  type: 'block'
};

export const InlineType = Template.bind({});
InlineType.args = {
  value: 'Inline',
  status: 'error',
  type: 'inline'
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  value: 'Custom',
  status: 'warning',
  overwriteClass: 'inline-block px-4 py-2 bg-purple-700 text-white font-bold rounded-full shadow-lg',
};





