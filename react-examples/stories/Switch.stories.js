import { fn } from '@storybook/test';
import TwixtSwitch from '../../react/src/Switch.js';

export default {
  title: 'Common/TwixtSwitch',
  component: TwixtSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    title: 'Welcome to Twixt React Switch Component',
    desc: 'Explore the Twixt React Switch for improved layout designed to enhance your experience.'
  },
};
export const Default = {
  args: {
    label: 'Light',
    onChange: () => {
     alert('Button clicked')
    }
  },
};

export const showPassword = {
  args: {
    label:'Show',
    onChange:()=>{
      alert('button clicked')
    }
  },
};

