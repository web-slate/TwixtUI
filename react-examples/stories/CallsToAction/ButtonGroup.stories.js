import React from 'react';
import TwixtButtonGroup from '../../../react/src/CallsToAction/ButtonGroup';
import TwixtButton from '../../../react/src/CallsToAction/Button';
import TwixtIcon from '../../../react/src/Icon';
import { background } from '@storybook/theming';

export default {
  title: 'Call To Action/TwixtButtonGroup',
  component: TwixtButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: { name: 'string', required: true },
      description: 'The content of the button',
      defaultValue: 'Button',
    },
  },
  docs: {
    description: {
      component: 'This is a customizable button group component used in various parts of the application. You can overwrite the class and define click actions.',
    },
    source: {
      type: 'code',
      language: 'jsx',
    },
  },
};

export const SimpleGroup = {
  args: {
    children: [
      <TwixtButton key="left" label="Left" />,
      <TwixtButton key="center" label="Center" />,
      <TwixtButton key="right" label="Left" />,
    ]
  },
};

export const PreviousNextButton = {
  args: {
    children: [
      <TwixtButton hideLabel={true} leftIcon={<TwixtIcon type="chevronLeft" />} />,
      <TwixtButton hideLabel={true} rightIcon={<TwixtIcon type="chevronRight" />} />,
    ]
  },
};

export const StatsButton = {
  args: {
    children: [
      <TwixtButton label="Bookmark" leftIcon={<TwixtIcon type="chevronLeft" />} />,
      <TwixtButton label="12K" />,
    ]
  },
};
