import React from 'react';
import TwixtBoxItem from '../../../react/src/Containers/BoxItem';

export default {
  title: 'Containers/TwixtBoxItem',
  component: TwixtBoxItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    type: ['block', 'inline'],
  },
};

export const BlockBoxItem = {
  args: {
    type: 'block',
    children: (<>block content</>)
  },
};

export const InlineBoxItem = {
  args: {
    type: 'inline',
    children: (<>Inline content</>)
  },
}; 
