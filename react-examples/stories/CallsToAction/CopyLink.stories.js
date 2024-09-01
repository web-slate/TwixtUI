import React from 'react';
import TwixtCopyLink from '../../../react/src/CallsToAction/CopyLink';
import TwixtIcon from '../../../react/src/Icon';

export default {
  title: 'Call To Action/TwixtCopyLink',
  component: TwixtCopyLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  link: {
    type: { name: 'string', required: true },
    description: 'link to be copied',
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
  leftIcon: {
    type: { name: 'node', required: false },
    description: 'Icon JSX',
    defaultValue: null,
    control:'text'
  },  
  },
  docs: {
    description: {
      component: 'This is a customizable copy link component used in various parts of the application. You can overwrite the class.',
    },
    source: {
      type: 'code',
      language: 'jsx',
    },
  },
};

export const DefaultCopyLink = {
  args: {
    label: 'Copy link',
    link: 'https://github.com/web-slate/TwixtUI',
    leftIcon: (<TwixtIcon type="export" variant="filled" size="12" color="color" />),
  },
};

export const CustomClassCopyLink = {
  args: {
    label: 'Copy link',
    link: 'https://github.com/web-slate/TwixtUI',
    overwriteClass: 'bg-blue-500 text-white px-4 py-1 rounded',
    leftIcon: (<TwixtIcon type="export" variant="filled" size="12" color="white" />),
  },
};

export const NoIconCopyLink = {
  args: {
    label: 'Copy link',
    link: 'https://github.com/web-slate/TwixtUI',
  },
};

export const LargeIconCopyLink = {
  args: {
    label: 'Copy link',
    link: 'https://github.com/web-slate/TwixtUI',
    leftIcon: (<TwixtIcon type="export" variant="filled" size="24" color="blue" />),
  },
};






