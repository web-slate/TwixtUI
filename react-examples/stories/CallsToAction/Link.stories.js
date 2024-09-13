import React from 'react';
import TwixtLink from '../../../react/src/CallsToAction/Link';
import TwixtBadge from '../../../react/src/Communications/Badge';
import TwixtIcon from '../../../react/src/Icon';
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
export const LinkWithLefticon = {
  args: {
    label: 'Go to TwixtUI', 
    link: 'https://github.com/web-slate/TwixtUI',
    leftIcon: (<TwixtIcon type="pin" variant="filled" size="12" color="color" />),
  },
};
export const LinkWithRighticon = {
  args: {
    label: 'Go to TwixtUI', 
    link: 'https://github.com/web-slate/TwixtUI',
    rightIcon: (<TwixtIcon type="chevronDown" variant="filled" size="12" color="color" />),

  },
};
export const LinkWithBadge = {
  args: {
    label: 'Go to TwixtUI',
    link: 'https://github.com/web-slate/TwixtUI',
    leftIcon: (<TwixtIcon type="pin" variant="filled" size="12" color="color" />),
    rightContent: <TwixtBadge value="2" />,
  },
};
export const LinkWithBorder = {
  args: {
    label: 'Go to TwixtUI',
    link: 'https://github.com/web-slate/TwixtUI',
    leftIcon: (<TwixtIcon type="pin" variant="filled" size="12" color="color" />),
    rightContent: <TwixtBadge value="2" />,
    overwriteClass:'rounded border'
    
  },
};
