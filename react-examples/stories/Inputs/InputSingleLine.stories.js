import React, { useState } from 'react';
import TwixtInputSingleLine  from '../../../react/src/Inputs/InputSingleLine';
import TwixtIcon from '../../../react/src/Icon';

export default {
  title: 'Inputs/TwixtInputSingleLine',
  component: TwixtInputSingleLine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
  }
};

const Template = (args) => {
  const [value, setValue] = useState(''); // State to manage the input value

  // Handler to update the value on change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <TwixtInputSingleLine {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default (Search)',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Disabled input',
  placeholder: 'Enter text',
  disabled: true,
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  placeholder: 'Enter text',
  leftIcon: <TwixtIcon type="userAvatar" variant="filled" />,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  placeholder: 'Enter text',
  rightIcon: <TwixtIcon type="lock" variant="filled" size={16} />,
};

export const AutoGrowWidth = Template.bind({});
AutoGrowWidth.args = {
  placeholder: 'Auto width',
  autoGrowWidth: true,
};

export const SuccessState = Template.bind({});
SuccessState.args = {
  placeholder: 'Looks good!',
  state: 'success',
  helperText: 'All good',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: 'Error input',
  state: 'error',
  helperText: 'Please enter a valid input',
};

export const WarningState = Template.bind({});
WarningState.args = {
  placeholder: 'Warning input',
  state: 'warning',
  helperText: 'This is a warning',
};

export const InfoState = Template.bind({});
InfoState.args = {
  placeholder: 'Info input',
  state: 'info',
  helperText: 'Additional info',
};
