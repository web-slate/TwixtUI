import { fn } from '@storybook/test';
import TwixtSingleLineInput from '../../react/src/InputSingleLine.js'; 

export default {
  title: 'Common/TwixtSingleLineInput',
  component: TwixtSingleLineInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' }, 
}
}

export const Welcome = {
  args: {
    label: 'Welcome',
    value: '',
    onChange:() => {},
    onBlur:() => {},
    inputClass: '',
  },
};
