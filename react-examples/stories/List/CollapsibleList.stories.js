import React from 'react';

import TwixtLink from '../../../react/src/CallsToAction/Link';
import ProfilePic from '../../../react/src/Communications/ProfilePic';
import TwixtIcon from '../../../react/src/Icon';
import CollapsibleList from '../../../react/src/List/CollapsibleList';
import ListItem from '../../../react/src/List/List/ListItem';

export default {
  title: 'List/Collapsible List',
  component: CollapsibleList,
  subcomponents: { ListItem },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "A collapsible list component that reuses the List and ListItem components.",
      },
    },
  },
};

const Template = (args) => <CollapsibleList {...args} />;

export const UserManagementDashboard = Template.bind({});
UserManagementDashboard.args = {
  hasDivider: true,
  headerLabel: 'User Management',
  children: (
    <>
      <ListItem
        label="John Doe"
        sublabel="Admin"
        leftContent={<ProfilePic label="JD" shortName={true} />}
        rightContent={
          <div>
            <TwixtLink label="Edit" link="#" /> / <TwixtLink label="Delete" link="#" />
          </div>
        }
      />
      <ListItem
        label="Jane Smith"
        sublabel="Editor"
        leftContent={<ProfilePic label="VR" shortName={true} />}
        rightContent={
          <div>
            <TwixtLink label="Edit" link="#" /> / <TwixtLink label="Delete" link="#" />
          </div>
        }
      />
      <ListItem
        label="Mark Johnson"
        sublabel="Viewer"
        leftContent={<ProfilePic label="MJ" shortName={true} />}
        rightContent={
          <div>
            <TwixtLink label="Edit" link="#" /> / <TwixtLink label="Delete" link="#" />
          </div>
        }
      />
    </>
  ),
};

export const EcommerceProductListing = Template.bind({});
EcommerceProductListing.args = {
  hasDivider: true,
  headerLabel: 'Product List',
  children: (
    <>
      <ListItem
        label="Wireless Headphones"
        sublabel="High-quality noise-cancelling headphones"
        leftContent={<TwixtIcon type="headphone" variant="filled" size="24" color="green" />}
        rightContent={
          <div>
            <span className="text-sm font-medium text-gray-700">$150</span>
            <TwixtLink label="Add to Cart" link="#" overwriteClass="pl-2 hover:underline" />
          </div>
        }
      />
      <ListItem
        label="Smart Watch"
        sublabel="Water-resistant with health tracking features"
        leftContent={<TwixtIcon type="watch" variant="filled" size="24" color="green" />}
        rightContent={
          <div>
            <span className="text-sm font-medium text-gray-700">$200</span>
            <TwixtLink label="Add to Cart" link="#" overwriteClass="pl-2 hover:underline" />
          </div>
        }
      />
      <ListItem
        label="Bluetooth Speaker"
        sublabel="Portable speaker with high-quality sound"
        leftContent={<TwixtIcon type="speaker" variant="filled" size="24" color="green" />}
        rightContent={
          <div>
            <span className="text-sm font-medium text-gray-700">$75</span>
            <TwixtLink label="Add to Cart" link="#" overwriteClass="pl-2 hover:underline" />
          </div>
        }
      />
    </>
  ),
};

export const NotificationCenter = Template.bind({});
NotificationCenter.args = {
  hasDivider: true,
  headerLabel: 'Notifications',
  children: (
    <>
      <ListItem
        label="System Update"
        sublabel="A new system update is available. Please update your software."
        leftContent={<div className="h-4 w-4 bg-blue-500 rounded-full"></div>}
        rightContent={
          <div>
            <span className="text-xs text-gray-500">2 hours ago</span>
            <TwixtLink label="Read More" link="#" overwriteClass="pl-2 hover:underline" />
          </div>
        }
      />
      <ListItem
        label="Password Expiry"
        sublabel="Your password will expire in 3 days. Please update it."
        leftContent={<div className="h-4 w-4 bg-red-500 rounded-full"></div>}
        rightContent={
          <div>
            <span className="text-xs text-gray-500">1 day ago</span>
            <TwixtLink label="Update Password" link="#" overwriteClass="pl-2 hover:underline" />
          </div>
        }
      />
      <ListItem
        label="New Message"
        sublabel="You have received a new message from John Doe."
        leftContent={<div className="h-4 w-4 bg-green-500 rounded-full"></div>}
        rightContent={
          <div>
            <span className="text-xs text-gray-500">30 mins ago</span>
            <TwixtLink label="View Message" link="#" overwriteClass="pl-2 hover:underline" />
          </div>
        }
      />
    </>
  ),
};