import React from 'react';
import TwixtPopover from '../../../react/src/Containers/Popover';

export default {
  title: 'Containers/TwixtPopover',
  component: TwixtPopover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    position: {
      control: {
        type: 'radio',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    children: { control: 'none' },
  },
};

const Template = (args) => (
  <div className="p-4">
    <TwixtPopover {...args}>
      {args.children}
    </TwixtPopover>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Top popover',
  content: "And here's some amazing content. It's very engaging. Right?",
  position: 'top',
  children: (
    <button className="text-white mb-3 me-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Trigger Popover to Top
    </button>
  ),
};

export const WithLink = Template.bind({});
WithLink.args = {
  title: 'Right popover',
  content: "And here's some amazing content. It's very engaging. Right?",
  position: 'right',
  children: (
    <a href="javascript:void(0);" className="text-blue-500 hover:underline">
      Click me for Right popover
    </a>
  ),
};

export const WithInput = Template.bind({});
WithInput.args = {
  title: 'Bottom popover',
  content: "And here's some amazing content. It's very engaging. Right?",
  position: 'bottom',
  children: (
    <input
      type="text"
      className="border border-gray-300 rounded-lg px-3 py-2"
      placeholder="Focus me for popover"
    />
  ),
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  title: 'Left popover',
  content: "And here's some amazing content. It's very engaging. Right?",
  position: 'left',
  children: (
    <button
      type="button"
      className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Custom Left Popover Button
    </button>
  ),
};
