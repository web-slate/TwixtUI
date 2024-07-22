import React from 'react';

import TwixtSwitch from "../../react/src/Switch.js"


// Default export to define the title and component
export default {
  title: 'Common/TwixtSwitch',
  component: TwixtSwitch,
  argTypes: {
  },
  args: {
    title: 'Welcome to Twixt React Switch Component',
    desc: 'Explore the Twixt React Switch for improved layout designed to enhance your experience.'
  },
};
export const ChangeTheme = {
  args: {
    label: 'Change Theme',
    onChange: () => {
     alert('Switch clicked')
    }
  },
};

export const DeactivateUser = {
  args: {
    label:'Deactivate User',
    onChange:()=>{
      alert('Switch clicked')
    }
  },
};

