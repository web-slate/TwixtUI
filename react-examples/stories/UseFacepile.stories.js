import React from 'react';
import UserFacePile from '../../react/src/UserFacePile.js';
export default {
  title: 'Common/TwixtUserFacePile',
  component: UserFacePile,
  parameters: {
    layout: 'centered', // Optional: Centers the component in Storybook
  },
  argTypes: {
    user: {
      control: {
        type: 'object',
      },
      defaultValue: {
        avatarUrl: '',
        class: '', // You can provide a default class if needed
      },
    },
  },
};

// Template function to create stories
const Template = (args) => <UserFacePile {...args} />;

// Default UserFacePile story
export const Default = Template.bind({});
Default.args = {
  user: {
    avatarUrl: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
    class: '', // Optionally add a class if needed
  },
};
Default.parameters = {
  docs: {
    storyDescription: 'Default UserFacePile with a standard avatar.',
  },
};

// UserFacePile with custom class
export const CustomClass = Template.bind({});
CustomClass.args = {
  user: {
    avatarUrl: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
    class: 'border-4 border-blue-500', // Example of a custom class
  },
};
CustomClass.parameters = {
  docs: {
    storyDescription: 'UserFacePile with a custom class applied to the avatar.',
  },
};