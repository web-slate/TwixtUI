import React from 'react';
import TwixtRadio  from '../../../react/src/Inputs/Radio';

export default {
  title: 'Inputs/TwixtRadio',
  component: TwixtRadio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    checked: true,
    label: 'Radio Label',
  }
};

const Template = (args) => <TwixtRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  label: 'Default Checked Radio',
  checked: true,
  disabled: false,
  radioColor: 'text-blue-600',
  overwriteClass: '',
  position: 'left',
  description: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabled',
  label: 'Disabled Radio',
  checked: false,
  disabled: true,
  radioColor: 'text-gray-400',
  overwriteClass: 'cursor-not-allowed',
  position: 'left',
  description: 'This radio button is disabled.',
};

export const MoveToRight = Template.bind({});
MoveToRight.args = {
  name: 'right-position',
  label: 'Right Side Radio',
  checked: false,
  disabled: false,
  radioColor: 'text-green-600',
  overwriteClass: '',
  position: 'right',
  description: 'The radio button is positioned on the right.',
};

export const ChangeColor = Template.bind({});
ChangeColor.args = {
  name: 'color-change',
  label: 'Red Radio',
  checked: false,
  disabled: false,
  radioColor: 'text-red-600',
  overwriteClass: '',
  position: 'left',
  description: 'The radio button color has been changed.',
};

export const OverwriteClass = Template.bind({});
OverwriteClass.args = {
  name: 'overwrite-class',
  label: 'Custom Class Radio',
  checked: false,
  disabled: false,
  radioColor: 'text-blue-600',
  overwriteClass: 'border-4 border-purple-500 bg-opacity-50',
  position: 'left',
  description: 'Custom classes are applied to this radio button.',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  name: 'with-children',
  label: 'Radio with Children',
  checked: false,
  disabled: false,
  radioColor: 'text-blue-600',
  overwriteClass: '',
  position: 'left',
  description: (
    <>
      This radio button has additional <strong>children elements</strong> in its description.
    </>
  ),
};