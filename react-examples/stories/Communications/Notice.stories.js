import React from 'react';
import TwixtButton from '../../../react/src/CallsToAction/Button';
import TwixtNotice from '../../../react/src/Communications/Notice';
import TwixtIcon from '../../../react/src/Icon';


export default {
  title: 'Communications/TwixtNotice',
  component: TwixtNotice,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    overwriteClass: { control: 'text' },
  },
};

const Template = (args) => <TwixtNotice {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Notice',
  icon: <TwixtIcon type="notification" variant="filled" size="16" color="color" />, 
  children: <p>This is the body of the notice.</p>,
  callToActionButtons: (<TwixtButton
    background="bg-red-500"
    label="Learn More"
    onClick={() => {}}
  />),
  overwriteClass: '',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: 'Custom Notice',
  icon: <TwixtIcon type="notification" variant="filled" size="16" color="color" />,
  children: <p>This notice has custom styles.</p>,
  callToActionButtons: (<TwixtButton
    background="bg-red-500"
    label="Learn More"
    onClick={() => {}}
  />),
  overwriteClass: 'bg-yellow-100 border-yellow-500',
};
