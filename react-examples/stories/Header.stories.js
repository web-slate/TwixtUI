import React from 'react';
import TwixtHeader from '../../react/src/Header.js';
import TwixtAlert from '../../react/src/Alert.js';

export default {
  title: 'Common/TwixtHeader',
  component: TwixtHeader,
};

// Template function to create stories
const Template = (args) => <TwixtHeader {...args} />;

// Default Header story
export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  announceMent: null,
  headerClass: 'bg-blue-500 text-white',
  children: <span>Logo</span>,
  rightBlock: <span>Right Block</span>,
};



// Header with Custom Classes story
export const HeaderWithCustomClasses = Template.bind({});
HeaderWithCustomClasses.args = {
  announceMent: null,
  headerClass: 'bg-blue-500 text-white',
  children: <span>Title</span>,
  rightBlock: <span>Logout</span>,
};

// Header with Hamburger Click story
export const HeaderWithHamburgerClick = Template.bind({});
HeaderWithHamburgerClick.args = {
  announceMent: null,
  headerClass: 'bg-blue-500 text-white',
  children: <span>Ecospace</span>,
  rightBlock: <span>Logout</span>,
  onHamburgerClick: () => alert('Hamburger clicked!'),
};