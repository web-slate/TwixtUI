import { fn } from '@storybook/test';
import React from 'react';
import TwixtButton from '../../react/src/Button.js';


export default {
  title: 'Common/TwixtButton',
  component: TwixtButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked', 
      description: 'Function to be called when the button is clicked',
    },
    children: {
      type: { name: 'string', required: true },
      description: 'The content of the button', 
      defaultValue: 'Button', 
    },
    overwriteClass: {
      type: { name: 'string' },
    },
  },
};


export const clickButton = {
  args: {
    children: 'Clickme',
    overwriteClass: 'px-4 py-2 bg-indigo-500 text-white rounded-md',
    onClick:()=>{
      alert('button clicked')
    }
  },
}


