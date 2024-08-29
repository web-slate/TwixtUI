import React, { useState } from 'react';
import TwixtToast from '../../../react/src/Communications/Toast';

export default {
  title: 'Communications/TwixtToast',
  component: TwixtToast,
  argTypes: {
    title: { control: 'text', defaultValue: 'Default Title' },
    body: { control: 'text', defaultValue: 'This is a message body.' },
    type: { 
      control: 'select', 
      options: ['info', 'warning', 'error'],
      defaultValue: 'info',
    },
    autoHide: { control: 'number', defaultValue: 5000 },
    overwriteClass: { control: 'text', defaultValue: '' },
    position: { 
      control: 'select', 
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'],
      defaultValue: 'top-right',
    },
    onHide: { action: 'onHide' },
  },
};

const Template = (args) => {
  const [showToast, setShowToast] = useState(true);

  const handleHide = () => {
    setShowToast(false);
    args.onHide();
  };

  return (
    <>
      {showToast && <TwixtToast {...args} onHide={handleHide} />}
      <button
        onClick={() => setShowToast(true)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Toast
      </button>
    </>
  );
};

export const Info = Template.bind({});
Info.args = {
  title: 'Info Title',
  body: 'This is an informational message.',
  type: 'info',
  autoHide: 5000,
  position: 'top-right',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning Title',
  body: 'This is a warning message.',
  type: 'warning',
  autoHide: 5000,
  position: 'bottom-right',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error Title',
  body: 'This is an error message.',
  type: 'error',
  autoHide: 5000,
  position: 'top-left',
};

export const WithoutBody = Template.bind({});
WithoutBody.args = {
  title: 'No Body',
  type: 'info',
  autoHide: 5000,
  position: 'bottom-right',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  title: 'Custom Styled Toast',
  body: 'This toast has custom styling.',
  type: 'info',
  autoHide: 5000,
  position: 'top-center',
  overwriteClass: 'flex items-start p-6 mb-4 text-sm text-white bg-purple-700 border-l-4 border-teal-500 shadow-lg rounded-md',
};
