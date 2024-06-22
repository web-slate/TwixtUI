import React from 'react';
import TwixtUserCard from '../../react/src/UserCard';

export default {
  title: 'Common/TwixtUserCard',
  component: TwixtUserCard,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'John Doe',
      description: 'Title of the user card',
    },
    subTitleList: {
      control: 'array',
      defaultValue: ['Software Engineer', 'New York, USA'],
      description: 'List of subtitle items',
    },
    stats: {
      control: 'array',
      defaultValue: [
        { label: 'Posts', value: 25 },
        { label: 'Followers', value: 340 },
        { label: 'Following', value: 180 },
      ],
      description: 'List of statistics items',
    },
    cardImageUrl: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/150',
      description: 'URL of the user image',
    },
    cardBackgroundUrl: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/400x200',
      description: 'URL of the background image',
    },
  },
};

// Template function for creating story instances
const Template = (args) => <TwixtUserCard {...args} />;

// Define stories
export const Default = Template.bind({});
Default.args = {
  title: 'John Doe',
  subTitleList: ['Software Engineer', 'New York, USA'],
  stats: [
    { label: 'Posts', value: 25 },
    { label: 'Followers', value: 340 },
    { label: 'Following', value: 180 },
  ],
  cardImageUrl: 'https://via.placeholder.com/150',
  cardBackgroundUrl: 'https://via.placeholder.com/400x200',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  title: 'Jane Smith',
  subTitleList: ['Product Designer', 'San Francisco, USA'],
  stats: [
    { label: 'Posts', value: 18 },
    { label: 'Followers', value: 420 },
    { label: 'Following', value: 150 },
  ],
  cardImageUrl: 'https://via.placeholder.com/160',
  cardBackgroundUrl: 'https://via.placeholder.com/450x200',
};

export const NoStats = Template.bind({});
NoStats.args = {
  title: 'Michael Johnson',
  subTitleList: ['Marketing Specialist', 'London, UK'],
  stats: [],
  cardImageUrl: 'https://via.placeholder.com/170',
  cardBackgroundUrl: 'https://via.placeholder.com/500x200',
};

