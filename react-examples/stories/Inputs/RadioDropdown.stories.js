import React, { useState } from 'react';
import TwixtRadioDropdown from '../../../react/src/Inputs/RadioDropdown';

export default {
  title: 'Inputs/TwixtRadioDropdown',
  component: TwixtRadioDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Control to dynamically modify the default selected option
    defaultSelected: {
      control: 'text',
      description: 'The default selected radio option',
      defaultValue: 'Default radio',
    },
  },
  args: {
  }
};

const Template = (args) => {
  const [selected, setSelected] = useState('');

  const handleRadioChange = (value) => {
    setSelected(value);
  };

  const options = [
    { label: 'Option 1', value: 'Option 1', disabled: false },
    { label: 'Option 2', value: 'Option 2', disabled: false },
    { label: 'Option 3', value: 'Option 3', disabled: false }, // Disabled radio
  ];

  return <TwixtRadioDropdown radioOptions={options} disabled={false} onChange={handleRadioChange} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'Option 1',
};

export const DefaultVariant = Template.bind({});
DefaultVariant.args = {
    defaultValue: 'Option 1',
};

export const PrimaryVariant = Template.bind({});
PrimaryVariant.args = {
    defaultValue: 'Option 1',
    variant: 'primary'
};

export const SecondaryVariant = Template.bind({});
SecondaryVariant.args = {
    defaultValue: 'Option 1',
    variant: 'secondary'
};

export const WithFilter = Template.bind({});
WithFilter.args = {
  defaultValue: 'Option 2',
  enableFilter: true
}

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: 'Option 3',
  disabled: true
};