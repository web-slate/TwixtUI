import React from 'react';
import TwixtRadioDropdown  from '../../../react/src/Inputs/RadioDropdown';

export default {
  title: 'Inputs/TwixtRadioDropdown',
  component: TwixtRadioDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
  }
};

const Template = (args) => <TwixtRadioDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
};
