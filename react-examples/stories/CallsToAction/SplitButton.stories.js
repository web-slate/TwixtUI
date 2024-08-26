import React from 'react';
import TwixtSplitButton from '../../../react/src/CallsToAction/SplitButton';
import TwixtIcon from '../../../react/src/Icon';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Call To Action/TwixtSplitButton',
  component: TwixtSplitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialLabel: { control: 'text', description: 'Initial label for the main button' },
    options: { control: 'array', description: 'Array of options with label and onClick handlers' },
  },
};

// Example for Document Management
export const DocumentManagement = {
  args: {
    initialLabel: 'Document Actions',
    options: [
      {
        label: 'Download Document',
        onClick: action('Download Document clicked'),
        icon:  <TwixtIcon type="file" variant="filled" />,
      },
      {
        label: 'Share Document',
        onClick: action('Share Document clicked'),
        icon: <TwixtIcon type="file" variant="filled" />,
      },
      {
        label: 'Restrict Access',
        onClick: action('Restrict Access clicked'),
        icon: <TwixtIcon type="lock" variant="filled" />,
      },
    ],
  },
};

// Example for User Profile Actions
export const UserProfileActions = {
  args: {
    initialLabel: 'Profile Options',
    options: [
      {
        label: 'Edit Profile',
        onClick: action('Edit Profile clicked'),
        icon: <TwixtIcon type="file" variant="filled" />,
      },
      {
        label: 'Change Password',
        onClick: action('Change Password clicked'),
        icon: <TwixtIcon type="lock" variant="filled" />,
      },
      {
        label: 'Logout',
        onClick: action('Logout clicked'),
        icon: <TwixtIcon type="share" variant="filled" />,
      },
    ],
  },
};

// Example for Settings Management
export const SettingsManagement = {
  args: {
    initialLabel: 'Settings',
    options: [
      {
        label: 'Account Settings',
        onClick: action('Account Settings clicked'),
        icon: <TwixtIcon type="file" variant="filled" />,
      },
      {
        label: 'Privacy Settings',
        onClick: action('Privacy Settings clicked'),
        icon: <TwixtIcon type="lock" variant="filled" />,
      },
      {
        label: 'Notification Settings',
        onClick: action('Notification Settings clicked'),
        icon: <TwixtIcon type="share" variant="filled" />,
      },
    ],
  },
};

// Example for File Actions
export const FileActions = {
  args: {
    initialLabel: 'File Actions',
    options: [
      {
        label: 'Upload File',
        onClick: action('Upload File clicked'),
        icon: <TwixtIcon type="file" variant="filled" />,
      },
      {
        label: 'Delete File',
        onClick: action('Delete File clicked'),
        icon: <TwixtIcon type="lock" variant="filled" />,
      },
      {
        label: 'Rename File',
        onClick: action('Rename File clicked'),
        icon: <TwixtIcon type="share" variant="filled" />,
      },
    ],
  },
};
