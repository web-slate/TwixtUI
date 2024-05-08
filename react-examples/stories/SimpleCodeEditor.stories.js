import React from 'react';
import SimpleCodeEditor from '../../react/src/SimpleCodeEditor.js';
import TwixtCodeEditor from '../../react/src/SimpleCodeEditor.js';

export default {
  title: 'Common/TwixtCodeEditor',
  component: TwixtCodeEditor,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    title: 'Welcome to Twixt code editor Component',
    desc: 'Explore the Twixt code editorfor improved layout designed to enhance your experience.'
  },
};

export const Default = (args) => <SimpleCodeEditor {...args} />;

Default.args = {
  height: '200px',
  extensions: [],
  value: '',
  onChange: () => {},
};
export const fullScreen = (args) => <SimpleCodeEditor {...args} />;

fullScreen.args = {
  height: '100vh',
  extensions: [],
  value: '',
  onChange: () => {},
};
