import React from 'react';
import TwixtButton from '../../react/src/CallsToAction/Button';
import TwixtLink from '../../react/src/CallsToAction/Link';

export default {
  title: 'Call To Action/TwixtLink',
  component: TwixtLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      type: { name: 'string', required: false },
      description: 'Tailwind text color class',
      defaultValue: 'text-blue-500',
    },
    onClick: {
      action: 'clicked',
      description: 'Function to be called when the link is clicked',
    },
    background: {
      type: { name: 'string', required: false },
      description: 'Tailwind background color class',
      defaultValue: '',
    },
    link: {
      type: { name: 'string', required: false },
      description: 'URL the link points to',
      defaultValue: '#',
    },
    label: {
      type: { name: 'string', required: true },
      description: 'The content of the link',
      defaultValue: 'Link',
    },
    overwriteClass: {
      type: { name: 'string', required: false },
      description: 'Additional CSS classes to overwrite the default ones',
      defaultValue: '',
    },
  },
};

export const DefaultLink = {
  args: {
    label: 'Go to TwixtUI',
    link: 'https://github.com/web-slate/TwixtUI',
  },
};

export const LinkWithButton = {
  args: {
    label: (
      <TwixtButton
        link="#"
        label="Button Link"
      />
    ),
    link: '#',
  },
};
