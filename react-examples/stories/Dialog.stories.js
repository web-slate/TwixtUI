import { fn } from '@storybook/test';
import React from 'react';
import TwixtDialog from '../../react/src/Dialog.js'; 

export default {
  title: 'Common/TwixtDialog',
  component: TwixtDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text'},
    desc: { control: 'text'},
    footer: { control: 'text'}
  }
};

export const DialogBox = {
  args: {
    title: 'Discussion',
    desc: 'Your description',
    footer:'Your footer message',
  },
};
