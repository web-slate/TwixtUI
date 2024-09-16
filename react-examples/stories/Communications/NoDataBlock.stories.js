import React from 'react';
import NoDataBlock from '../../../react/src/Communications/NoDataBlock';
export default {
  title: 'Communications/TwixtNoDataBlock',
  component: NoDataBlock,
  argTypes: {
    text: '',
    overwriteWidth: '',
    overwriteHeight: ''
  },
};

const Template = (args) => <NoDataBlock {...args}/>;

export const Default = Template.bind({});
Default.args = {};

export const Yellow = Template.bind({});
Yellow.args = { color: 'yellow'};

export const Buttons = Template.bind({});
Buttons.args = { color: 'yellow', displayButtons: true};
