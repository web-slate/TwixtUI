import { fn } from '@storybook/test';
import TwixtCopyButton from '../../react/src/CopyButton.js';

export default {
  title: 'Common/TwixtCopyButton',
  component: TwixtCopyButton,
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
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const copyProps = {
  args: {
    data: 'your content is copied',
    btnName: 'Copy button'
  },
};