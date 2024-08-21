import React from 'react';
import TwixtCopyLink from '../../react/src/CallsToAction/CopyLink';
import TwixtIcon from '../../react/src/Icon';

export default {
  title: 'Call To Action/TwixtCopyLink',
  component: TwixtCopyLink,
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
    label: 'Click to copy the link',
    link: 'https://github.com/web-slate/TwixtUI',
  },
};
export const CopyLinkwithIcon = {
  args: {
    label: 'Copy to Clipboard',
    link: 'https://github.com/web-slate/TwixtUI',
    leftIcon: (<TwixtIcon type="export" variant="filled" size="12" color="color" />),
  },
};