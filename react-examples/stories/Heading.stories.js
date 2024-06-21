import React from 'react';
import TwixtHeading from '../../react/src/Heading';

export default {
  title: 'Common/TwixtHeading',
  component: TwixtHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {control: 'text' },
  },
  args: {
    children: 'Default Heading', 
    type: 'h1'
  },
};

const TwixtHeadingTemplate = (args) => <TwixtHeading {...args} />;
export const Heading1 = TwixtHeadingTemplate.bind({});
Heading1.args = {
  type: 'h1',
  children: 'Heading1',
};

export const Heading2 = TwixtHeadingTemplate.bind({});
Heading2.args = {
  type: 'h2',
  children: 'Heading2',
};
