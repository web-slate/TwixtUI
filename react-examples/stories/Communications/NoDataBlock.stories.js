import React from 'react';
import NoDataBlock from '../../../react/src/Communications/NoDataBlock';
export default {
  title: 'Communications/TwixtNoDataBlock',
  component: NoDataBlock,
  argTypes: {
    status: { 
        options: ['Active', 'DoNotDisturb', 'InMeeting', 'Away'],
    },
    overwriteClass: '',
  },
};

const Template = (args) => <NoDataBlock {...args}/>;

export const Default = Template.bind({});
Default.args = {};

