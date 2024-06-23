import React from 'react';
import UserStackList from '../../react/src/UserStackList.js';

export default {
  title: 'Common/TwixtUserStackList',
  component: UserStackList,
  argTypes: {
    items: { control: 'array' },
  },
  docs: {
    description: {
      component: 'This component renders a list of user profiles with their details such as name, location, profession, and connection time.',
    },
  },
};

// Template function to create stories
const Template = (args) => <UserStackList {...args} />;

// DefaultList story
export const DefaultList = Template.bind({});
DefaultList.args = {
  items: [
    {
      name: 'John Doe',
      location: 'New York, USA',
      profession: 'Software Engineer',
      profileImageUrl: 'https://via.placeholder.com/48',
      connectedTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Jane Smith',
      location: 'Los Angeles, USA',
      profession: 'Product Manager',
      profileImageUrl: 'https://via.placeholder.com/48',
      connectedTime: '2023-01-24T14:30Z',
    },
  ],
};
DefaultList.parameters = {
  docs: {
    storyDescription: 'This is the default `UserStackList` component with a list of user profiles.',
  },
};
//Custom
export const CustomList = Template.bind({});
CustomList.args = {
  items: [
    {
      name: 'Venkat',
      location: 'Singapore',
      profession: 'Software Engineer',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/1652629?v=4/48',
      connectedTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Yuvaraj',
      location: 'Chennai, India',
      profession: 'Full stack Developer',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/29545937?v=4/48',
      connectedTime: '2023-01-24T14:30Z',
    },
  ],
};
CustomList.parameters = {
  docs: {
    storyDescription: 'This is the Custom `UserStackList` component with a list of user profiles.',
  },
};


