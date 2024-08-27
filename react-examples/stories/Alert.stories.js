import React from 'react';
import TwixtAlert from '../../react/src/Alert.js';

export default {
  title: 'Common/TwixtAlert',
  component: TwixtAlert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  args: {
    type: ['announcement', 'error', 'warning', 'notification'],
    title: 'Welcome to Twixt React Alert Component',
    desc: 'Explore the Alert for improved layout designed to enhance your experience.'
  },
};

export const Announcement = {
  args: {
    title: 'Welcome',
    desc: 'Explore the Alert for improved layout designed to enhance your experience.',
    onClose: () => {}
  },
};

export const ErrorNotice = {
  args: {
    title: 'Notice',
    type: 'error',
    desc: 'We are currently experiencing technical difficulties with our app. Please be patient as we work to resolve this issue.',
    onClose: () => {}
  },
};

export const Notification = {
  args: {
    title: 'Urgent Security Notification',
    type: 'notification',
    desc: 'We have detected unusual activity in some user accounts. Please reset your password immediately if you notice any suspicious activity.',
    onClose: () => {}
  },
};

export const Warning = {
  args: {
    title: 'Warning Cookie Usgae',
    type: 'warning',
    desc: 'Our system has detected unusual activity in some user accounts. For your safety, please reset your password immediately if you notice any suspicious behavior.',
    onClose: () => {}
  },
};

export const IncreasePadding = {
  args: {
    title: 'Increase Padding Title',
    desc: 'Desc goes here',
    overwriteClass: 'bg-orange-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-7',
    onClose: () => {}
  },
};

export const BackgroundChange = {
  args: {
    title: 'Change Background Color',
    desc: 'The background color of this alert has been changed.',
    overwriteClass: 'bg-yellow-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-2'
  },
};

export const BorderColorChange = {
  args: {
    title: 'Change Border Color',
    desc: 'The border color of this alert has been changed.',
    overwriteClass: 'bg-orange-100 border-l-4 border-blue-500 text-orange-700 mx-4 p-2'
  },
};

export const TextColorChange = {
  args: {
    title: 'Change Text Color',
    desc: 'The text color of this alert has been changed.',
    overwriteClass: 'bg-orange-100 border-l-4 border-orange-500 text-black mx-4 p-2'
  },
};
