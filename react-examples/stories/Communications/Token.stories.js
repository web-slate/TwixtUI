import React from 'react';
import TwixtToken from '../../../react/src/Communications/Token';
import TwixtIcon from '../../../react/src/Icon';

export default {
  title: 'Communications/TwixtToken',
  component: TwixtToken,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    background: { control: 'color' },
    color: { control: 'color' },
    removable: { control: 'boolean' },
  },
};

const Template = (args) => <TwixtToken {...args} />;

export const Default = Template.bind({});
Default.args = {
  background: '#e5e9f0',
  color: '#70728f',
  label: 'Information',
  description: 'This is an informational token.',
  icon: <TwixtIcon type="help" variant="filled" size="16" color="#70728f" />,
  removable: true,
  onRemove: () => alert('Token removed!'),
};

export const WithoutDescriptionAndIcon = Template.bind({});
WithoutDescriptionAndIcon.args = {
  background: '#e5e9f0',
  color: '#70728f',
  label: 'Item 1',
  removable: true,
  onRemove: () => alert('Token removed!'),
};

export const Warning = Template.bind({});
Warning.args = {
  background: '#fff9c4',
  color: '#f57f17',
  label: 'Warning',
  description: 'This is a warning message.',
  icon: <TwixtIcon type="warning" variant="filled" size="16" color="#f57f17" />,
  removable: true,
  onRemove: () => alert('Warning token removed!'),
};

export const Success = Template.bind({});
Success.args = {
  background: '#c8e6c9',
  color: '#388e3c',
  label: 'Success',
  description: 'This is a success message.',
  icon: <TwixtIcon type="success" variant="filled" size="16" color="#388e3c" />,
  removable: true,
  onRemove: () => alert('Success token removed!'),
};
