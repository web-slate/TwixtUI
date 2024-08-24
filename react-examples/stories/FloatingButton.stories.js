import React from 'react';
import FloatingButton from '../../react/src/CallsToAction/FloatingButton';
import TwixtButton from '../../react/src/CallsToAction/Button';

export default {
  title: 'Call To Action/FloatingButton',
  component: FloatingButton,
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

const Template = (args) => <FloatingButton {...args} />;

export const DefaultBottomRight = Template.bind({});
DefaultBottomRight.args = {
  children: (
    <TwixtButton label="Bottom Right (Default)" />
  )
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  vertical: "bottom",
  horizontal: "left",
  children: (
    <TwixtButton label="Bottom Left" />
  )
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  vertical: "top",
  horizontal: "left",
  children: (
    <TwixtButton label="Top Left" />
  )
};

export const TopRight = Template.bind({});
TopRight.args = {
  vertical: "top",
  horizontal: "right",
  children: (
    <TwixtButton label="Top Right" />
  )
};

export const MiddleCenter = Template.bind({});
MiddleCenter.args = {
  vertical: "middle",
  horizontal: "center",
  children: (
    <TwixtButton label="Middle Center" />
  )
};