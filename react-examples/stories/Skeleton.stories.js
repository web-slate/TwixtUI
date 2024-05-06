import React from 'react';
import { LeftSideBar, ContentPane, RightSideBar } from '../../react/src/Skeleton.js';
import TwixtSkeleton from '../../react/src/Skeleton.js';

export default {
  title: 'Common/TwixtSkeleton',
  component: TwixtSkeleton,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    title: 'Welcome to TwixtSkeleton Component',
    desc: 'Explore the TwixtSkeleton component for improved layout designed to enhance your experience.'
  },
};


export const LeftSidebarLayout = () => (
  <>
    <LeftSideBar openDrawer={true}>
      Links or content for the left sidebar
    </LeftSideBar>
    <ContentPane>
      <h1>your content</h1>
    </ContentPane>
  </>
);

export const RightSidebarLayout = () => (
  <>
    <ContentPane>
    </ContentPane>
    <RightSideBar>
      <h1>your content</h1>
    </RightSideBar>
  </>
);


