import React from 'react';
import TwixtToolTip from '../../../react/src/Communications/ToolTip';
export default {
  title: 'Components/TwixtToolTip',
  component: TwixtToolTip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    position: {
      control: { type: 'radio', options: ['top', 'bottom', 'left', 'right'] },
    },
    show: { control: 'boolean' },
  },
};

const Template = (args) => <TwixtToolTip {...args} />;

export const Top = Template.bind({});
Top.args = {
  content: 'Tooltip with dynamic content',
  position: 'top',
  show: true,
  children: (
    <a href="#">Hover to show ToolTip on Top</a>
  )
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: 'Tooltip with dynamic content',
  position: 'bottom',
  show: true,
  children: (
    <a href="#">Hover to show ToolTip on Bottom</a>
  )
};

export const Left = Template.bind({});
Left.args = {
  content: 'Tooltip with dynamic content',
  position: 'left',
  show: true,
  children: (
    <a href="#">Hover to show ToolTip on Left</a>
  )
};

export const Right = Template.bind({});
Right.args = {
  content: 'Tooltip with dynamic content',
  position: 'right',
  show: true,
  children: (
    <a href="#">Hover to show ToolTip on Right</a>
  )
};

export const Hidden = Template.bind({});
Hidden.args = {
  content: 'Tooltip with dynamic content',
  position: 'top',
  show: false,
  children: (
    <a href="#">No Hover its hidden</a>
  )
};