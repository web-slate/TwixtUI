import { fn } from '@storybook/test';
import TwixtProgressLine from '../../react/src/PageProgressLine.js';

export default {
  title: 'Common/TwixtProgressLine',
  component: TwixtProgressLine ,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    title: 'Welcome to Twixt ProgressLine Component',
    desc: 'Explore the page progress line for improved layout designed to enhance your experience.'
  },
};

export const red = {
  args: {
    loadingColor: 'red',
    completionColor: 'orange'
  },
};
export const  yellow= {
  args: {
    loadingColor: '#E3D022',
    completionColor:'#82E322'
  },
};
export const blue = {
  args: {
    loadingColor: 'blue',
    completionColor: 'orange'
  },
};


