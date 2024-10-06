import React from 'react';
import TwixtBoxItem from '../../../react/src/Containers/BoxItem';
import StackBox from '../../../react/src/Containers/StackBox';

export default {
  title: 'Containers/StackBox',
  component: StackBox,
  subcomponents: { TwixtBoxItem },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
    className: { control: 'text', defaultValue: '' },
  },
};

const Template = (args) => (
  <StackBox {...args} className="bg-gray-100 p-4">
    {args.children}
  </StackBox>
);

export const HorizontalStack = Template.bind({});
HorizontalStack.args = {
  direction: 'horizontal',
  className: 'gap-4',
  children: (
    <>
      <TwixtBoxItem key="0" overwriteClass="bg-blue-500 p-2 text-white">Column 1</TwixtBoxItem>
      <TwixtBoxItem key="1" overwriteClass="bg-green-500 p-2 text-white">Column 2</TwixtBoxItem>
      <TwixtBoxItem key="2" overwriteClass="bg-red-500 p-2 text-white">Column 3</TwixtBoxItem>
    </>
  ),
};

export const VerticalStack = Template.bind({});
VerticalStack.args = {
  direction: 'vertical',
  className: 'gap-4',
  children: (
    <>
      <TwixtBoxItem key="0" overwriteClass="bg-blue-500 p-2 text-white">Row 1</TwixtBoxItem>
      <TwixtBoxItem key="1" overwriteClass="bg-green-500 p-2 text-white">Row 2</TwixtBoxItem>
      <TwixtBoxItem key="2" overwriteClass="bg-red-500 p-2 text-white">Row 3</TwixtBoxItem>
    </>
  ),
};

export const NestedStack = Template.bind({});
NestedStack.args = {
  direction: 'horizontal',
  className: 'gap-4',
  children: (
    <>
      <TwixtBoxItem key="0" overwriteClass="bg-blue-500 p-2 text-white">Column 1</TwixtBoxItem>
      <StackBox direction="vertical" className="bg-green-500 p-2 text-white gap-2">
        <TwixtBoxItem key="0" overwriteClass="bg-yellow-500 p-2 text-white">Row 1 in Column 2</TwixtBoxItem>
        <TwixtBoxItem key="1" overwriteClass="bg-orange-500 p-2 text-white">Row 2 in Column 2</TwixtBoxItem>
        <TwixtBoxItem key="2" overwriteClass="bg-pink-500 p-2 text-white">Row 3 in Column 2</TwixtBoxItem>
      </StackBox>
      <TwixtBoxItem key="2" overwriteClass="bg-red-500 p-2 text-white">Column 3</TwixtBoxItem>
    </>
  ),
};
