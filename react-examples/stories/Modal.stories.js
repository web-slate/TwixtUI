import { fn } from '@storybook/test';
import TwixtModal from '../../react/src/Modal.js';

export default {
  title: 'Common/TwixtModal',
  component: TwixtModal,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    title: 'Welcome to Twixt modal',
    desc:"Explore the Twixt modal for improved layout designed to enhance your experience.",
  },
};

export const Login = {
  args: {
    title: 'Login',
    children:"your description",
    footer:"Thank you"
  },
};

export const Error = {
  args: {
    title: 'Error',
    children:"your description",
    footer:"Thank you"
  },
};

export const Notification = {
  args: {
    title: 'Notification',
    children:"your description",
    footer:"Thank you"
    },
};



