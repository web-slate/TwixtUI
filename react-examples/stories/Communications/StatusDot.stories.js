import React from 'react';
import StatusDot from '../../../react/src/Communications/StatusDot';
export default {
  title: 'Communications/TwixtStatusDot',
  component: StatusDot,
  argTypes: {
    status: { 
     
      options: ['Default', 'Active', 'Success', 'Error', 'Warning', 'Yellow', 'Magenta', 'Purple', 'Teal', 'Cyan'],
    },
    overwriteClass: '',
  },
};

const Template = (args) => <StatusDot {...args}/>;

export const OffLine = Template.bind({});
OffLine.args = {};

export const Active = Template.bind({});
Active.args = {
  status: 'Active'
};

export const DoNotDisturb = Template.bind({});
DoNotDisturb.args = {
  status: 'DoNotDisturb'
};

export const InMeeting = Template.bind({});
InMeeting.args = {
  status: 'InMeeting'
};

export const Away = Template.bind({});
Away.args = {
  status: 'Away'
};
