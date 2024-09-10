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

