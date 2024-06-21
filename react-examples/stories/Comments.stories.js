import React from 'react';
import TwixtCommentsSystem from '../../react/src/CommentsSystem.js';
import { fn } from '@storybook/test';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Common/CommentsSystem',
  component: TwixtCommentsSystem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
}



export const CommentBox = {
  args: {
    title: 'Discussion',
    desc: 'max-w-2xl mx-auto px-4 flex justify-between items-center mb-6',
    overwriteClass: 'bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased',
    type:"h2"
  },
};
