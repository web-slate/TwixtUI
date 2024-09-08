
import React from 'react';
import TwixtInputSingleLine from '../../../react/src/_deprecated/InputSingleLine'; 

export default {
  title: '_Deprecated/TwixtInputSingleLine_DEPRECATED',
  component: TwixtInputSingleLine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' }, 
}
}

export const Welcome = {
  args: {
    label: 'Welcome',
    value: '',
    onChange:() => {},
    onBlur:() => {},
    inputClass: '',
  },
};
