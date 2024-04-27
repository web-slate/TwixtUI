import { fn } from '@storybook/test';
import TwixtAlert from '../../react/src/Alert.js';
import '../../react/dist/tailwind.css';

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
export const Primary = {
  args: {
    title: 'Welcome to Twixt React Alert Component',
    desc: 'Explore the Alert for improved layout designed to enhance your experience.'
  },
};

export const Secondary = {
  args: {
    label: 'Service Disruption Notice',
    desc: 'We are currently experiencing technical difficulties with our app. Please be patient as we work to resolve this issue.',
  },
};

export const Large = {
  args: {
    label: 'Urgent Security Notification',
    desc: 'We have detected unusual activity in some user accounts. Please reset your password immediately if you notice any suspicious activity.',
  },
};

export const Small = {
  args: {
    label: 'Small',
    desc: 'Button',
  },
};
