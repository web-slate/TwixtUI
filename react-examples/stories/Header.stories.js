import React from 'react';
import TwixtHeader from '../../react/src/Header.js'; 

export default {
  title: 'Common/Header',
  component: TwixtHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    announcement: {}, 
    headerClass: {},
    children: { control: 'text' },
    rightBlock: {},
    onHamburger: { control: 'function' } // Assuming onHamburger is a function, use control: 'function' to display it in the controls addon
  },
}

export const WithAlert = ({ childrenClassName, ...args }) => (
  <TwixtHeader
    announcement={{
      title: 'Hi',
      desc: 'Hello',
      children: 'Default Heading',
    }}
    onHamburger={() => {}}
    {...args} // Pass all args to TwixtHeader
  >
    {/* Children components */}
    <h1 className={args.childrenClassName}>This is the header</h1>

  </TwixtHeader>
);

export const WithRightBlock = () => (
  <TwixtHeader rightBlock={<button>Right Block</button>}>
    {/* Children components */}
  </TwixtHeader>
);

export const WithHamburger = () => (
  <TwixtHeader headerClass="bg-slate-800 text-slate-100 rounded-full pr-2">
    {/* Children components */}
  </TwixtHeader>
);