import React from 'react';
import TwixtButton from '../../../react/src/CallsToAction/Button';
import TwixtBoxItem from '../../../react/src/Containers/BoxItem';
import TwixtFlexBox from '../../../react/src/Containers/FlexBox';

export default {
  title: 'Containers/FlexBox',
  component: TwixtFlexBox,
  subcomponents: { TwixtBoxItem, TwixtButton },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
      defaultValue: 'row',
    },
    grow: { control: 'boolean', defaultValue: false },
    shrink: { control: 'boolean', defaultValue: false },
    wrap: { control: 'boolean', defaultValue: false },
    rowGap: { control: 'text', defaultValue: '0' },
    columnGap: { control: 'text', defaultValue: '0' },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      defaultValue: 'stretch',
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      defaultValue: 'start',
    },
    alignSelf: {
      control: { type: 'select' },
      options: ['auto', 'start', 'center', 'end', 'stretch'],
      defaultValue: 'auto',
    },
    overwriteClass: { control: 'text', defaultValue: '' },
  },
};

const Template = (args) => (
  <TwixtFlexBox overwriteClass="bg-gray-100 p-4" {...args}>
    {args.children != null ? args.children : (
      <>
        <TwixtButton label="Item 1" />
        <TwixtButton label="Item 2" />
        <TwixtButton label="Item 3" />
      </>
    )}
  </TwixtFlexBox>
);

export const Default = Template.bind({});
Default.args = {
  direction: 'row',
  grow: false,
  shrink: false,
  wrap: false,
  rowGap: '2',
  columnGap: '2',
  alignItems: 'stretch',
  justifyContent: 'start',
  alignSelf: 'auto',
  overwriteClass: '',
};

export const RowDirection = Template.bind({});
RowDirection.args = {
  direction: 'row',
  wrap: true,
  rowGap: '4',
  children: (
    <>
      <TwixtBoxItem key="0">Row Item 1</TwixtBoxItem>
      <TwixtBoxItem key="1">Row Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2">Row Item 3</TwixtBoxItem>
    </>
  )
};

export const ColumnDirection = Template.bind({});
ColumnDirection.args = {
  direction: 'column',
  wrap: false,
  columnGap: '4',
  alignItems: 'center',
  justifyContent: 'center',
  children: (
    <>
      <TwixtBoxItem key="0">Column Item 1</TwixtBoxItem>
      <TwixtBoxItem key="1">Column Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2">Column Item 3</TwixtBoxItem>
    </>
  )
};

export const GrowExample = Template.bind({});
GrowExample.args = {
  direction: 'row',
  grow: true, // This will allow the items to grow
  alignItems: 'center',
  justifyContent: 'start',
  className: 'bg-gray-100 p-4 h-500', // Set a container height of 500px for visibility
  children: (
    <>
      <TwixtBoxItem key="0" overwriteClass="bg-blue-500 p-2 text-white flex-grow">Item 1 (Grow)</TwixtBoxItem>
      <TwixtBoxItem key="1" overwriteClass="bg-green-500 p-2 text-white">Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2" overwriteClass="bg-red-500 p-2 text-white">Item 3</TwixtBoxItem>
    </>
  ),
};

export const ShrinkExample = Template.bind({});
ShrinkExample.args = {
  direction: 'row',
  shrink: true, // This will allow the items to shrink
  alignItems: 'center',
  justifyContent: 'start',
  className: 'bg-gray-100 p-4 h-500 w-full', // Set a full-width and height container
  children: (
    <>
      <TwixtBoxItem key="0" overwriteClass="bg-blue-500 p-2 text-white flex-shrink">Item 1 (Shrink)</TwixtBoxItem>
      <TwixtBoxItem key="1" overwriteClass="bg-green-500 p-2 text-white">Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2" overwriteClass="bg-red-500 p-2 text-white">Item 3</TwixtBoxItem>
    </>
  ),
};

export const CenterAligned = Template.bind({});
CenterAligned.args = {
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export const WrapToNextLine = Template.bind({});
WrapToNextLine.args = {
  direction: 'row',
  wrap: true,
  rowGap: '4',
  columnGap: '4',
  overwriteClass: 'bg-red-100 h-80 p-5',
  children: (
    <>
      <TwixtBoxItem key="0" overwriteClass="w-1/4 p-4 bg-gray-100 text-gray-800">Item 1</TwixtBoxItem>
      <TwixtBoxItem key="1" overwriteClass="w-1/4 p-4 bg-gray-100 text-gray-800">Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2" overwriteClass="w-1/4 p-4 bg-gray-100 text-gray-800">Item 3</TwixtBoxItem>
      <TwixtBoxItem key="3" overwriteClass="w-1/4 p-4 bg-gray-100 text-gray-800">Item 4</TwixtBoxItem>
      <TwixtBoxItem key="4" overwriteClass="w-1/4 p-4 bg-gray-100 text-gray-800">Item 5</TwixtBoxItem>
      <TwixtBoxItem key="5" overwriteClass="w-1/4 p-4 bg-gray-100 text-gray-800">Item 6</TwixtBoxItem>
    </>
  ),
};

export const AlignToMiddle = Template.bind({});
AlignToMiddle.args = {
  direction: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  rowGap: '2',
  overwriteClass: 'bg-red-100 h-80 p-5',
  children: (
    <>
      <TwixtBoxItem key="0">Item 1</TwixtBoxItem>
      <TwixtBoxItem key="1">Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2">Item 3</TwixtBoxItem>
    </>
  ),
};

export const AlignToTop = Template.bind({});
AlignToTop.args = {
  direction: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  rowGap: '2',
  overwriteClass: 'bg-red-100 h-80 p-5',
  children: (
    <>
      <TwixtBoxItem key="0" overwriteClass="bg-green-500 p-2 text-white">Item 1</TwixtBoxItem>
      <TwixtBoxItem key="1" overwriteClass="bg-green-500 p-2 text-white">Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2" overwriteClass="bg-green-500 p-2 text-white">Item 3</TwixtBoxItem>
    </>
  ),
};

export const AlignToBottom = Template.bind({});
AlignToBottom.args = {
  direction: 'column',
  alignItems: 'end',
  justifyContent: 'end',
  rowGap: '2',
  overwriteClass: 'bg-red-100 h-80 p-5',
  children: (
    <>
      <TwixtBoxItem key="0">Item 1</TwixtBoxItem>
      <TwixtBoxItem key="1">Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2">Item 3</TwixtBoxItem>
    </>
  ),
};

export const AlignToLeft = Template.bind({});
AlignToLeft.args = {
  direction: 'row',
  justifyContent: 'start',
  columnGap: '4',
  children: (
    <>
      <TwixtBoxItem key="0">Item 1</TwixtBoxItem>
      <TwixtBoxItem key="1">Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2">Item 3</TwixtBoxItem>
    </>
  ),
};

export const AlignToCenter = Template.bind({});
AlignToCenter.args = {
  direction: 'row',
  justifyContent: 'center',
  columnGap: '4',
  children: (
    <>
      <TwixtBoxItem key="0">Item 1</TwixtBoxItem>
      <TwixtBoxItem key="1">Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2">Item 3</TwixtBoxItem>
    </>
  ),
};

export const AlignToRight = Template.bind({});
AlignToRight.args = {
  direction: 'row',
  justifyContent: 'end',
  columnGap: '4',
  children: (
    <>
      <TwixtBoxItem key="0">Item 1</TwixtBoxItem>
      <TwixtBoxItem key="1">Item 2</TwixtBoxItem>
      <TwixtBoxItem key="2">Item 3</TwixtBoxItem>
    </>
  ),
};
