import React from 'react';
import TwixtApplicationShell from '../../../react/src/Containers/ApplicationShell';
import TwixtCollapsibleList from '../../../react/src/List/CollapsibleList';
import TwixtListItem from '../../../react/src/List/List/ListItem';
import TwixtLink from '../../../react/src/CallsToAction/Link';
import TwixtButton from '../../../react/src/CallsToAction/Button';
import TwixtFlexBox from '../../../react/src/Containers/FlexBox';
import TwixtBoxItem from '../../../react/src/Containers/BoxItem';
import TwixtInputSingleLine from '../../../react/src/Inputs/InputSingleLine';
import TwixtIcon from '../../../react/src/Icon';
import TwixtNotificationItem from '../../../react/src/Containers/NotificationItem';
import ProfilePic from '../../../react/src/Communications/ProfilePic';
import { TableWithDefaultSortedField } from '../List/SimpleTable.stories';

// Icons
import { HiOutlineBuildingOffice2 as BuildingHi2Icon } from "react-icons/hi2";
import { GrOverview } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { SiGoogledocs } from "react-icons/si";
import { SiGoogleauthenticator } from "react-icons/si";
import { IoIosHelpCircle } from "react-icons/io";
import { CgComponents } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Containers/TwixtApplicationShell',
  component: TwixtApplicationShell,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
};

const notificationPopoverContent = (<>
  <TwixtBoxItem>
    <TwixtNotificationItem
      leftContent={<ProfilePic label="JD" shortName />}
      altText="Bonnie Green avatar"
      name="Bonnie Green"
      message="sent message 'Hey, what's up? All set for the presentation?'"
      time="a few moments ago"
      iconColor="bg-primary-700"
      iconPath="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293zM3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
    />
    <TwixtNotificationItem
      leftContent={<ProfilePic label="JL" shortName />}
      altText="Jese Leos avatar"
      name="Jese Leos"
      message=" and 5 others started following you."
      time="10 minutes ago"
      iconColor="bg-gray-900"
      iconPath="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
    />
    <TwixtNotificationItem
      leftContent={<ProfilePic label="JM" shortName />}
      altText="Joseph McFall avatar"
      name="Joseph Mcfall"
      message=" and 141 others love your story. See it and view more stories."
      time="44 minutes ago"
      iconColor="bg-red-600"
      iconPath="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
    />
    <TwixtNotificationItem
      leftContent={<ProfilePic label="RC" shortName />}
      altText="Roberta Casas image"
      name="Leslie Livingston"
      message=" mentioned you in a comment: @bonnie.green what do you say?"
      time="1 hour ago"
      iconColor="bg-green-400"
      iconPath="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
    />
    <TwixtNotificationItem
      leftContent={<ProfilePic label="RB" shortName />}
      altText="Robert image"
      name="Robert Brown"
      message=" posted a new video: Glassmorphism - learn how to implement the new design trend."
      time="3 hours ago"
      iconColor="bg-purple-500"
      iconPath="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
    />
  </TwixtBoxItem>
  <a
    href="#"
    className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
  >
    <TwixtBoxItem overwriteClass="inline-flex items-center gap-x-2">
      <TwixtIcon size="20" type="eye" variant="filled" />
      View all
    </TwixtBoxItem>
  </a>
</>);

const renderFullSidebar = () => (
  <>
    <ul className="space-y-2">
      <li>
        <TwixtLink
          link="#"
          overwriteClass="flex items-center p-2 gap-4 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
          leftIcon={<GrOverview size="20" className="hover:bg-gray-100 group-hover:text-gray-900" />}
          label="Overview"
        />
      </li>
      <li>
        <TwixtCollapsibleList
          leftIcon={<RiPagesLine size="20" className="text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />}
          hasDivider={false}
          headerLabel="Pages"
          overwriteClass="bg-transparent flex items-center cursor-pointer p-2 gap-4 rounded-md w-200 text-base transition-all duration-300 ease-in-out font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
        >
          <React.Fragment key=".0">
            <TwixtListItem
              label={<TwixtLink link="#" label="Manage" />}
              leftContent={<RiPagesLine size="20" className="text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />}
              sublabel="Manage Add, Edit and Delete"
            />
            <TwixtListItem
              label={<TwixtLink link="#" label="Edit" />}
              leftContent={<RiPagesLine size="20" className="text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />}
              sublabel="To Edit Specific Item"
            />
            <TwixtListItem
              label={<TwixtLink link="#" label="Delete" />}
              leftContent={<RiPagesLine size="20" className="text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />}
              sublabel="To Delete Specific Item"
            />
          </React.Fragment>
        </TwixtCollapsibleList>
      </li>
      <li>
        <TwixtCollapsibleList
          leftIcon={<svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            ></path>
          </svg>}
          hasDivider={false}
          headerLabel="Sales"
          overwriteClass="bg-transparent flex items-center cursor-pointer p-2 gap-4 rounded-md w-200 text-base transition-all duration-300 ease-in-out font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
        >
          <React.Fragment key=".0">
            <TwixtListItem
              label={<TwixtLink link="#" label="Sales Order" />}
              leftContent={<GrOverview size="20" className="hover:bg-gray-100" />}
              sublabel="Manage Sales Order"
            />
            <TwixtListItem
              label={<TwixtLink link="#" label="Billing" />}
              leftContent={<GrOverview size="20" className="hover:bg-gray-100" />}
              sublabel="Manage Vendors Billings"
            />
            <TwixtListItem
              label={<TwixtLink link="#" label="Invoice" />}
              leftContent={<GrOverview size="20" className="hover:bg-gray-100" />}
              sublabel="Manage Invoices"
            />
          </React.Fragment>
        </TwixtCollapsibleList>
      </li>
      <li>
        <TwixtCollapsibleList
          leftIcon={<SiGoogleauthenticator size="20" className="hover:bg-gray-100" />}
          hasDivider={false}
          headerLabel="Authentication"
          overwriteClass="bg-transparent flex items-center cursor-pointer p-2 gap-4 rounded-md w-200 text-base transition-all duration-300 ease-in-out font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
        >
          <React.Fragment key=".1">
            <TwixtListItem
              label={<TwixtLink link="#" label="Sign In" />}
              sublabel="Login"
            />
            <TwixtListItem
              label={<TwixtLink link="#" label="Sign Up" />}
              sublabel="Create New Account"
            />
            <TwixtListItem
              label={<TwixtLink link="#" label="Forget Password" />}
              sublabel="To Reset Password"
            />
          </React.Fragment>
        </TwixtCollapsibleList>
      </li>
    </ul>
    <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
      <li>
        <TwixtLink
          link="#"
          overwriteClass="flex items-center p-2 gap-4 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
          leftIcon={<TiMessages size="20" className="hover:bg-gray-100" />}
          rightContent={<TwixtBoxItem type="inline" overwriteClass="mr-2 text-s text-grey-100">
            7
          </TwixtBoxItem>}
          label="Messages"
        />
      </li>
      <li>
        <TwixtLink
          link="#"
          overwriteClass="flex items-center p-2 gap-4 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
          leftIcon={<SiGoogledocs size="20" className="hover:bg-gray-100" />}
          label="Docs"
        />
      </li>
      <li>
        <TwixtLink
          link="#"
          overwriteClass="flex items-center p-2 gap-4 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
          leftIcon={<CgComponents size="20" />}
          label="Components"
        />
      </li>
      <li>
        <TwixtLink
          link="#"
          overwriteClass="flex items-center p-2 gap-4 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
          leftIcon={<IoIosHelpCircle size="20" />}
          label="Help"
        />
      </li>
    </ul>
  </>
);


export const ApplicationShell = {
  args: {
    header: {
      left: (<TwixtFlexBox>
        <BuildingHi2Icon size="40" style={{
          backgroundColor: "#1877F2",
          borderRadius: "50%",
          padding: "7px",
          marginRight: "7px",
          color: "#FFFFFF",
        }} />
        <TwixtLink
          label="Application Name"
          link="#"
          onClick={() => { }}
          appendClass="px-2"
        />
      </TwixtFlexBox>),
      center: (
        <TwixtBoxItem appendClass="relative md:w-64 md:w-96">
          <TwixtInputSingleLine
            leftIcon={<TwixtIcon size={16} type="magnifier" variant="filled" />}
            onChange={() => { }}
            placeholder="Search Application"
            value=""
          />
        </TwixtBoxItem>
      ),
      right: {
        menuBar: []
      }
    },
    sidebar: {
      expandedNode: renderFullSidebar(),
    },
    body: {
      pageTitle: 'Page Simple Example'
    }
  },
};

export const WithNotifications = {
  args: {
    header: {
      left: (<TwixtFlexBox>
        <BuildingHi2Icon size="40" style={{
          backgroundColor: "#1877F2",
          borderRadius: "50%",
          padding: "7px",
          marginRight: "7px",
          color: "#FFFFFF",
        }} />
        <TwixtLink
          label="Application Name"
          link="#"
          onClick={() => { }}
          appendClass="px-2"
        />
      </TwixtFlexBox>),
      center: (
        <TwixtBoxItem appendClass="relative md:w-64 md:w-96">
          <TwixtInputSingleLine
            leftIcon={<TwixtIcon size={16} type="magnifier" variant="filled" />}
            onChange={() => { }}
            placeholder="Search Application"
            value=""
          />
        </TwixtBoxItem>
      ),
      right: {
        menuBar: [{
          id: 'notifications',
          content: (<TwixtButton
            leftIcon={<TwixtIcon size="20" type="notification" variant="filled" />}
            hideLabel={true}
            overwriteClass="bg-transparent"
          />),
          title: 'Notifications',
          popoverContent: notificationPopoverContent,
        }]
      }
    },
    sidebar: {
      expandedNode: renderFullSidebar(),
    },
    body: {
      pageTitle: 'Page With Notifications',
      content: TableWithDefaultSortedField(),
    }
  },
};

const LinkAsBlockElement = ({children}) => (<TwixtLink
  link="#"
  overwriteClass="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
>{children}</TwixtLink>)

const appsPopover = (<TwixtBoxItem className="grid grid-cols-3 gap-4 p-4">
  <LinkAsBlockElement key="sales">
    <svg
      aria-hidden="true"
      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <TwixtBoxItem overwriteClass="text-sm text-gray-900 dark:text-white">Sales</TwixtBoxItem>
  </LinkAsBlockElement>
  <LinkAsBlockElement key="users">
    <svg
      aria-hidden="true"
      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
      ></path>
    </svg>
    <TwixtBoxItem overwriteClass="text-sm text-gray-900 dark:text-white">Users</TwixtBoxItem>
  </LinkAsBlockElement>
  <LinkAsBlockElement key="inbox">
    <svg
      aria-hidden="true"
      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <TwixtBoxItem overwriteClass="text-sm text-gray-900 dark:text-white">Inbox</TwixtBoxItem>
  </LinkAsBlockElement>
  <LinkAsBlockElement key="profile">
    <svg
      aria-hidden="true"
      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <TwixtBoxItem overwriteClass="text-sm text-gray-900 dark:text-white">
      Profile
    </TwixtBoxItem>
  </LinkAsBlockElement>
  <LinkAsBlockElement key="settings">
    <svg
      aria-hidden="true"
      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <TwixtBoxItem overwriteClass="text-sm text-gray-900 dark:text-white">
      Settings
    </TwixtBoxItem>
  </LinkAsBlockElement>
  <LinkAsBlockElement key="products">
    <svg
      aria-hidden="true"
      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
      <path
        fill-rule="evenodd"
        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <TwixtBoxItem overwriteClass="text-sm text-gray-900 dark:text-white">
      Products
    </TwixtBoxItem>
  </LinkAsBlockElement>
  <LinkAsBlockElement key="pricing">
    <svg
      aria-hidden="true"
      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <TwixtBoxItem overwriteClass="text-sm text-gray-900 dark:text-white">
      Pricing
    </TwixtBoxItem>
  </LinkAsBlockElement>
  <LinkAsBlockElement key="billing">
    <svg
      aria-hidden="true"
      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <TwixtBoxItem overwriteClass="text-sm text-gray-900 dark:text-white">
      Billing
    </TwixtBoxItem>
  </LinkAsBlockElement>
  <LinkAsBlockElement key="logout">
    <svg
      aria-hidden="true"
      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
      ></path>
    </svg>
    <TwixtBoxItem overwriteClass="text-sm text-gray-900 dark:text-white">
      Logout
    </TwixtBoxItem>
  </LinkAsBlockElement>
</TwixtBoxItem>);

export const WithNotificationAndApps = {
  args: {
    header: {
      left: (<TwixtFlexBox>
        <BuildingHi2Icon size="40" style={{
          backgroundColor: "#1877F2",
          borderRadius: "50%",
          padding: "7px",
          marginRight: "7px",
          color: "#FFFFFF",
        }} />
        <TwixtLink
          label="Application Name"
          link="#"
          onClick={() => { }}
          appendClass="px-2"
        />
      </TwixtFlexBox>),
      center: (
        <TwixtBoxItem appendClass="relative md:w-64 md:w-96">
          <TwixtInputSingleLine
            leftIcon={<TwixtIcon size={16} type="magnifier" variant="filled" />}
            onChange={() => { }}
            placeholder="Search Application"
            value=""
          />
        </TwixtBoxItem>
      ),
      right: {
        menuBar: [{
          id: 'notifications',
          content: (<TwixtButton
            leftIcon={<TwixtIcon size="20" type="notification" variant="filled" />}
            hideLabel={true}
            overwriteClass="bg-transparent"
          />),
          title: 'Notifications',
          popoverContent: notificationPopoverContent,
        }, {
          id: 'apps',
          content: (<TwixtButton
            leftIcon={<TwixtIcon size="20" type="apps" variant="filled" />}
            hideLabel={true}
            overwriteClass="bg-transparent"
          />),
          title: 'Apps',
          popoverContent: appsPopover,
        }]
      }
    },
    sidebar: {
      expandedNode: renderFullSidebar(),
    },
    body: {
      pageTitle: 'Page With Notification and Apps'
    }
  },
};

const userPopover = (<>
  <TwixtBoxItem overwriteClass="py-3 px-4">
    <TwixtBoxItem type="inline" overwriteClass="block text-sm font-semibold text-gray-900 dark:text-white">
      Sundar Pitchai
    </TwixtBoxItem>
    <TwixtBoxItem type="inline" overwriteClass="block text-sm text-gray-900 truncate dark:text-white">
      sundar.p@gmail.com
    </TwixtBoxItem>
  </TwixtBoxItem>
  <TwixtFlexBox direction="column" appendClass="text-gray-700">
    <TwixtBoxItem key="profile">
      <TwixtLink
        link="#"
        overwriteClass="block py-2 px-4 text-sm hover:bg-gray-100"
        label="My profile"
      />
    </TwixtBoxItem>
    <TwixtBoxItem key="account-settings">
      <TwixtLink
        link="#"
        overwriteClass="block py-2 px-4 text-sm hover:bg-gray-100"
        label="Account settings"
      />
    </TwixtBoxItem>
  </TwixtFlexBox>

  <TwixtFlexBox direction="column" appendClass="py-1 text-gray-700 dark:text-gray-300">
    <TwixtBoxItem key="my-likes">
      <TwixtLink
        link="#"
        label="My likes"
        leftIcon={<svg
          className="mr-2 w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          ></path>
        </svg>}
        overwriteClass="flex gap-2 py-2 px-4 text-sm hover:bg-gray-100"
      />
    </TwixtBoxItem>
    <TwixtBoxItem key="collections">
      <TwixtLink
        link="#"
        label="Collections"
        leftIcon={<svg
          className="mr-2 w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
        </svg>}
        overwriteClass="flex gap-2 py-2 px-4 text-sm hover:bg-gray-100"
      />
    </TwixtBoxItem>
    <TwixtBoxItem key="pro">
      <TwixtLink
        link="#"
        label="Pro version"
        leftIcon={<svg
          aria-hidden="true"
          className="mr-2 w-5 h-5 text-primary-600 dark:text-primary-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
            clipRule="evenodd"
          ></path>
        </svg>}
        overwriteClass="flex gap-2 py-2 px-4 text-sm hover:bg-gray-100"
        rightIcon={<svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>}
      />
    </TwixtBoxItem>
  </TwixtFlexBox>

  <TwixtFlexBox direction="column" appendClass="text-gray-700">
    <TwixtBoxItem>
      <TwixtLink
        link="#"
        overwriteClass="block py-2 px-4 text-sm hover:bg-gray-100"
        label="Sign out"
      />
    </TwixtBoxItem>
  </TwixtFlexBox>
</>);

export const WithNotificationAndAppsAndUsers = {
  args: {
    header: {
      left: (<TwixtFlexBox>
        <BuildingHi2Icon size="40" style={{
          backgroundColor: "#1877F2",
          borderRadius: "50%",
          padding: "7px",
          marginRight: "7px",
          color: "#FFFFFF",
        }} />
        <TwixtLink
          label="Application Name"
          link="#"
          onClick={() => { }}
          appendClass="px-2"
        />
      </TwixtFlexBox>),
      center: (
        <TwixtBoxItem appendClass="relative md:w-64 md:w-96">
          <TwixtInputSingleLine
            leftIcon={<TwixtIcon size={16} type="magnifier" variant="filled" />}
            onChange={() => { }}
            placeholder="Search Application"
            value=""
          />
        </TwixtBoxItem>
      ),
      right: {
        menuBar: [{
          id: 'notifications',
          content: (<TwixtButton
            leftIcon={<TwixtIcon size="20" type="notification" variant="filled" />}
            hideLabel={true}
            overwriteClass="bg-transparent"
          />),
          title: 'Notifications',
          popoverContent: notificationPopoverContent,
        }, {
          id: 'apps',
          content: (<TwixtButton
            leftIcon={<TwixtIcon size="20" type="apps" variant="filled" />}
            hideLabel={true}
            overwriteClass="bg-transparent"
          />),
          title: 'Apps',
          popoverContent: appsPopover,
        }, {
          id: 'user',
          content: (<TwixtButton
            leftIcon={<TwixtIcon size="20" type="userAvatar" variant="filled" />}
            hideLabel={true}
            overwriteClass="bg-transparent"
          />),
          hideTitle: true,
          title: 'User',
          popoverContent: userPopover,
        }]
      }
    },
    sidebar: {
      expandedNode: renderFullSidebar(),
    },
    body: {
      pageTitle: 'Page With Notification, Apps and Users'
    }
  },
};

const renderCollapsedSidebar = () => (
  <ul className="space-y-2">
    <li>
      <TwixtButton
        leftIcon={<GrOverview size="20" />}
        hideLabel={true}
        overwriteClass="w-full bg-transparent p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
      />
    </li>
    <li>
      <TwixtButton
        leftIcon={<RiPagesLine size="20" />}
        hideLabel={true}
        overwriteClass="w-full bg-transparent p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
      />
    </li>
    <li>
      <TwixtButton
        leftIcon={<svg
          aria-hidden="true"
          className="w-6 h-6  text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          ></path>
        </svg>}
        hideLabel={true}
        overwriteClass="w-full bg-transparent p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
      />
    </li>
    <li>
      <TwixtButton
        leftIcon={<SiGoogleauthenticator size="20" />}
        hideLabel={true}
        overwriteClass="w-full bg-transparent p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
      />
    </li>
    <li>
      <TwixtButton
        leftIcon={<TiMessages size="20" />}
        hideLabel={true}
        overwriteClass="w-full bg-transparent p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
      />
    </li>
    <li>
      <TwixtButton
        leftIcon={<SiGoogledocs size="20" />}
        hideLabel={true}
        overwriteClass="w-full bg-transparent p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
      />
    </li>
    <li>
      <TwixtButton
        leftIcon={<CgComponents size="20" />}
        hideLabel={true}
        overwriteClass="w-full bg-transparent p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
      />
    </li>
    <li>
      <TwixtButton
        leftIcon={<IoIosHelpCircle size="20" />}
        hideLabel={true}
        overwriteClass="w-full bg-transparent p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
      />
    </li>
  </ul>
);

export const WithSidebarCollapseOption = {
  args: {
    header: {
      left: (<TwixtFlexBox>
        <BuildingHi2Icon size="40" style={{
          backgroundColor: "#1877F2",
          borderRadius: "50%",
          padding: "7px",
          marginRight: "7px",
          color: "#FFFFFF",
        }} />
        <TwixtLink
          label="Application Name"
          link="#"
          onClick={() => { }}
          appendClass="px-2"
        />
      </TwixtFlexBox>),
      center: (
        <TwixtBoxItem appendClass="relative md:w-64 md:w-96">
          <TwixtInputSingleLine
            leftIcon={<TwixtIcon size={16} type="magnifier" variant="filled" />}
            onChange={() => { }}
            placeholder="Search Application"
            value=""
          />
        </TwixtBoxItem>
      ),
      right: {
        menuBar: [{
          id: 'notifications',
          content: (<TwixtButton
            leftIcon={<TwixtIcon size="20" type="notification" variant="filled" />}
            hideLabel={true}
            overwriteClass="bg-transparent"
          />),
          title: 'Notifications',
          popoverContent: notificationPopoverContent,
        }, {
          id: 'apps',
          content: (<TwixtButton
            leftIcon={<TwixtIcon size="20" type="apps" variant="filled" />}
            hideLabel={true}
            overwriteClass="bg-transparent"
          />),
          title: 'Apps',
          popoverContent: appsPopover,
        }, {
          id: 'user',
          content: (<TwixtButton
            leftIcon={<TwixtIcon size="20" type="userAvatar" variant="filled" />}
            hideLabel={true}
            overwriteClass="bg-transparent"
          />),
          hideTitle: true,
          title: 'User',
          popoverContent: userPopover,
        }]
      }
    },
    sidebar: {
      collapsed: false,
      expandedNode: renderFullSidebar(),
      collpasedNode: renderCollapsedSidebar(),
      additionalBottomButtons: (<TwixtButton
        leftIcon={<CiSettings size="24" />}
        hideLabel={true}
        overwriteClass="bg-transparent hover:bg-gray-100 p-2"
      />)
    },
    body: {
      pageTitle: 'Page With Sidebar Collapse Option',
      content: TableWithDefaultSortedField(),
    }
  },
};