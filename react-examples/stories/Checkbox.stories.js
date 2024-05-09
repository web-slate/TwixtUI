import { fn } from '@storybook/test';
import React from 'react';
import TwixtCheckbox  from '../../react/src/Checkbox.js';

export default {
  title: 'Common/TwixtCheckbox',
  component: TwixtCheckbox,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'clicked', 
      description: 'Function to be called when the button is clicked',
    }
  }
};


export const checkButton = {
  args: {
    onChange:()=>{
      alert('button clicked')
    }
  },
}



