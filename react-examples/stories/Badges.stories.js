import React from 'react';
import TwixtBadges from '../../react/src/Badges.js';

export default {
  title: 'Common/TwixtBadges',
  component: TwixtBadges,
  argTypes: {
    text: { control: 'text' },
    overwriteClass: {
      type: { name: 'string' },
    }
  },
  docs: {
    description: {
      component: 'This component represents different styles of badges used across the application. The badges can be customized with different colors, borders, and icons.',
    },
  },
};

// Template function to create stories
const Template = (args) => <TwixtBadges {...args} />;

// DefaultBadge story
export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
  text: 'Default Badge',
  overwriteClass:'bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300',
};
DefaultBadge.parameters = {
  docs: {
    storyDescription: 'This is the default `Badges` component with a violet badge and an indigo badge.',
  },
};

// Custom Badge Story
export const CustomBadge = Template.bind({});
CustomBadge.args = {
  text: '',
};
CustomBadge.parameters = {
  docs: {
    storyDescription: 'This is a custom `Badges` component where you can modify the text prop.',
  },
};
