import { fn } from '@storybook/test';
import React from 'react'
import TwixtCheckbox  from '../../react/src/Checkbox.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Common/TwixtCheckbox',
  component: TwixtCheckbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

    onChange: { action: 'changed' },
    isChecked: { action: 'checked' }, 
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  
}
const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
  args.onChange(); // Assuming onChange is passed through args
};


// Template for a story with onChange handler
const Template = (args) => <TwixtCheckbox {...args} />;

// Example stories

export const Example = {
  args: {
  
      type:"checkbox",
      checked:{isChecked},
      onChange:{handleCheckboxChange},
      className:"checkbox opacity-0 absolute cursor-pointer w-full h-full",
      
  }
}
export const isChecked = Template.bind({});
isChecked.args = {
  onChange: () => console.log('Checkbox state changed'),
  isChecked:true,
};
export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  onChange: () => console.log('Checkbox state changed'),
  disabled: true,
};

