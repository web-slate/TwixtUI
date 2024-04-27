import { fn } from '@storybook/test';
import TwixtAlert from '../../react/src/Alert.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Common/TwixtAlert',
  component: TwixtAlert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    title: 'Welcome to Twixt React Alert Component',
    desc: 'Explore the Alert for improved layout designed to enhance your experience.'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Announcement = {
  args: {
    title: 'Welcome',
    desc: 'Explore the Alert for improved layout designed to enhance your experience.'
  },
};

export const ErrorNotice = {
  args: {
    title: 'Notice',
    desc: 'We are currently experiencing technical difficulties with our app. Please be patient as we work to resolve this issue.',
  },
};

export const Notification = {
  args: {
    title: 'Urgent Security Notification',
    desc: 'We have detected unusual activity in some user accounts. Please reset your password immediately if you notice any suspicious activity.',
  },
};

export const IncreasePadding = {
  args: {
    title: 'Increase Padding Title',
    desc: 'Desc goes here',
    overwriteClass: 'bg-orange-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-7'
  },
};

export const BackgroundChange = {
  args: {
    title: 'Change Background color',
    desc: 'Desc goes here',
    overwriteClass: 'bg-yellow-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-2'
  },
};

export const BorderColorChange = {
  args: {
    title: 'Change Border Change',
    desc: 'Desc goes here',
    overwriteClass: 'bg-orange-100 border-l-4 border-blue-500 text-orange-700 mx-4 p-2'
  },
};

export const TextColorChange = {
  args: {
    title: 'Change Text Color',
    desc: 'Desc goes here',
    overwriteClass: 'bg-orange-100 border-l-4 border-orange-500 text-black-700 mx-4 p-2'
  },
};
