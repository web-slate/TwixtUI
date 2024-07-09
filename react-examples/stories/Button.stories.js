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
  docs: {
    description: {
      component: 'This is a customizable button component used in various parts of the application. You can overwrite the class and define click actions.',
    },
    source: {
      type: 'code',
      language: 'jsx',
    },
  },
};

// Default click button story
export const clickButton = (args) => <TwixtButton {...args} />;
clickButton.args = {
  children: 'Clickme',
  overwriteClass: 'px-4 py-2 bg-indigo-500 text-white rounded-md',
  onClick: () => {
    alert('Button clicked');
  },
};
clickButton.parameters = {
  docs: {
    storyDescription: 'This is an example of the `TwixtButton` with custom text and an alert action on click.',
  },
};

// Hover effect button story
export const hoverButton = (args) => <TwixtButton {...args} />;
hoverButton.args = {
  children: 'Hover me',
  overwriteClass: 'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700',
  onClick: () => {
    alert('You have clicked the button');
  },
};
hoverButton.parameters = {
  docs: {
    storyDescription: 'This is an example of the `TwixtButton` with a hover effect. The button changes color when hovered.',
  },
};

// Circular button story
export const circularButton = (args) => <TwixtButton {...args} />;
circularButton.args = {
  children: '+',
  overwriteClass: 'w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center',
  onClick: () => {
    alert('Circular button clicked');
  },
};
circularButton.parameters = {
  docs: {
    storyDescription: 'This is an example of a circular `TwixtButton`. It is styled to be round with equal height and width.',
  },
};
