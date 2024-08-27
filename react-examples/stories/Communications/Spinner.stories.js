import React from 'react';
import TwixtSpinner from '../../../react/src/Communications/Spinner';

export default {
  title: 'Communications/TwixtSpinner',
  component: TwixtSpinner,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
      defaultValue: 'md',
    },
    fullPage: {
      control: 'boolean',
      defaultValue: false,
    },
    label: {
      control: 'text',
      defaultValue: 'Loading...',
    },
  },
};

const Template = (args) => <TwixtSpinner {...args} />;

export const SmallBlock = Template.bind({});
SmallBlock.args = {
  size: 'sm',
  label: 'Loading small...',
};

export const MediumBlock = Template.bind({});
MediumBlock.args = {
  size: 'md',
  label: 'Loading medium...',
};

export const LargeBlock = Template.bind({});
LargeBlock.args = {
  size: 'lg',
  label: 'Loading large...',
};

export const FullPage = Template.bind({});
FullPage.args = {
  size: 'xl',
  fullPage: true,
  label: 'Loading full page...',
};
