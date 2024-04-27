import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light', // or 'dark' depending on your preference

    colorPrimary: 'deepskyblue', // primary color
    colorSecondary: 'deepskyblue', // secondary color

    // UI
    appBg: 'white', // Background color for the UI
    appContentBg: 'silver', // Background color for panels
    appBorderColor: 'grey', // Border color
    appBorderRadius: 4, // Border radius

    // Typography
    fontBase: '"Open Sans", sans-serif', // Base font family
    fontCode: 'monospace', // Code font family

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Branding
    brandTitle: 'Twixt UI React', // Your brand name or title here
    brandUrl: 'https://web-slate.github.io/TwixtUI-React-App/', // Link to your site or docs
    brandImage: '', // Your logo URL
  }),
});
