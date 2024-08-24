import React from 'react';
import ToggleButton from '../../react/src/CallsToAction/ToggleButton/ToggleButton';
import TwixtIcon from '../../react/src/Icon';

export default {
  title: 'Call To Action/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onIcon:{
      type: { name: 'node', required: true },
      description: 'Tailwind icon',
      defaultValue:null
    },
    offIcon:{
      type: { name: 'node', required: true },
      description: 'Tailwind icon',
      defaultValue:null
    },   
    overwriteClass: {
      type: { name: 'string', required: false },
      description: 'Overwrite Tailwind other classes',
      defaultValue: 'px-2 py-2 rounded-md cursor-pointer',
    },
  },
  docs: {
    description: {
      component: 'This is a customizable toggle button component used in various parts of the application. You can overwrite the class.',
    },
    source: {
      type: 'code',
      language: 'jsx',
    },
  },
};

export const BookmarkIcon = {
  args: {
    onIcon: (<TwixtIcon type="note" variant="outline" size="12" color="color" />),
    offIcon: (<TwixtIcon type="note" variant="filled" size="12" color="color" />)
  }
};
