import React from 'react';
import TwixtButton from '../../react/src/CallsToAction/Button';
import TwixtIcon from '../../react/src/Icon';
import { background } from '@storybook/theming';

export default {
  title: 'Call To Action/TwixtButton',
  component: TwixtButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    background: {
      type: { name: 'string', required: false },
      description: 'Tailwind background class',
      defaultValue: 'bg-indigo-500',
    },
    color: {
      type: { name: 'string', required: false },
      description: 'Tailwind text color class',
      defaultValue: 'text-white',
    },
    onClick: {
      action: 'clicked',
      description: 'Function to be called when the button is clicked',
    },
    children: {
      type: { name: 'string', required: true },
      description: 'The content of the button',
      defaultValue: 'Button',
    },
    leftIcon: {
      type: { name: 'node', required: false },
      description: 'Icon JSX',
      defaultValue: null,
    },
    rightIcon: {
      type: { name: 'node', required: false },
      description: 'Icon JSX',
      defaultValue: null,
    },
    label: {
      type: { name: 'string', required: true },
      description: 'Button Label',
      defaultValue: '',
    },
    hideLabel: {
      type: { name: 'boolean', required: false },
      description: 'Button Label',
      defaultValue: false,
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'Button Disabled',
      defaultValue: false,
    },
    showSpinner: {
      type: { name: 'boolean', required: false },
      description: 'showSpinner in right side of the Button before right icon',
      defaultValue: false,
    },
    overwriteClass: {
      type: { name: 'string', required: false },
      description: 'Overwrite Tailwind other classes',
      defaultValue: 'px-4 py-2 rounded-md',
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

export const BackgroundColor = {
  args: {
    label: "Changed Background color to Red",
    background: "bg-red-500"
  },
};

export const TextColor = {
  args: {
    label: "Changed Text color to Black",
    background: "bg-green-500",
    color: "text-black"
  },
};

export const LeftIcon = {
  args: {
    leftIcon: (<TwixtIcon type="pin" variant="filled" size="12" color="color" />),
    hideLabel : true,
  },
};

export const LeftIconWithLabel = {
  args: {
    leftIcon: (<TwixtIcon type="magnifier" variant="filled" size="12" color="color" />),
    label: 'Search'
  },
};

export const LeftIconWithSpinner = {
  args: {
    leftIcon: (<TwixtIcon type="pin" variant="filled" size="12" color="color" />),
    hideLabel : true,
    showSpinner: true,
  },
};

export const RightIconWithSpinner = {
  args: {
    showSpinner: true,
    label: "Generating...",
    rightIcon: (<TwixtIcon type="chevronDown" variant="filled" size="12" color="color" />),
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
