import React from 'react';
import Stats from '../../react/src/Stats.js';
import TwixtStats from '../../react/src/Stats.js';

export default {
  title: 'Common/TwixtStats ',
  component: TwixtStats ,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    title: 'Welcome to Twixt React Stats Component',
    desc: 'Explore the Twixt React Stats for improved layout designed to enhance your experience.'
  },
};

export const DefaultStats = () => {

  const customItems = [
    { label: 'New Users', value: 50 },
    { label: 'New Products', value: 200 },
    { label: 'Total Sales', value: '$5,000' },
  ];
  
   return <Stats items={customItems} />;
};

