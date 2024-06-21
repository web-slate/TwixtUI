import React from 'react';
import TwixtCheckbox  from '../../react/src/Checkbox.js';

export default {
  title: 'Common/TwixtCheckbox',
  component: TwixtCheckbox,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    checked: true,
    label: 'Checkbox Label',
  }
};


export const SimpleAgreeCheckbox = {
  args: {
    checked: true,
    label: 'Accept Terms and Conditions',
    onChange: (newCheckedState) => console.log('Checkbox is now:', newCheckedState),
  },
}

export const UncheckedCheckbox = {
  args: {
    checked: false,
    label: 'Subscribe to Newsletter',
    onChange: (newCheckedState) => console.log('Checkbox is now:', newCheckedState),
  },
};