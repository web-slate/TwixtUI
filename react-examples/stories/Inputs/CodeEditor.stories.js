import React, { useState } from 'react';
import TwixtCodeEditor from '../../../react/src/Inputs/CodeEditor';

export default {
  title: 'Inputs/TwixtCodeEditor',
  component: TwixtCodeEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    height: { control: 'text' },
    width: { control: 'text' },
    value: { control: 'text' },
    language: {
      control: {
        type: 'select',
        options: ['javascript', 'python', 'html', 'css'],
      },
    },
  },
  args: {
    height: '400px',
    width: '100%',
    value: '',
    language: 'javascript',
  },
};

const Template = (args) => {
  const [code, setCode] = useState(args.value || '');
  return <TwixtCodeEditor {...args} value={code} onChange={setCode} />;
};

export const JavaScriptEditor = Template.bind({});
JavaScriptEditor.args = {
  height: '300px',
  value: `console.log('Hello, JavaScript!');`,
  language: 'javascript',
};

export const PythonEditor = Template.bind({});
PythonEditor.args = {
  height: '300px',
  value: `print('Hello, Python!')`,
  language: 'python',
};

export const HTMLEditor = Template.bind({});
HTMLEditor.args = {
  height: '300px',
  value: `<h1>Hello, HTML!</h1>`,
  language: 'html',
};

export const CSSEditor = Template.bind({});
CSSEditor.args = {
  height: '300px',
  value: `body { background-color: #f0f0f0; }`,
  language: 'css',
};
