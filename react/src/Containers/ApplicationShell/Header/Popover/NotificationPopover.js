import React, { useState } from 'react';
import ProfilePic from '../../../../Communications/ProfilePic';
import TwixtIcon from '../../../../Icon';
import TwixtButton from '../../../../CallsToAction/Button';

function ApplicationShellHeaderNotificationPopover() {
  // State to handle dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Notifications Button */}
      <TwixtButton
        leftIcon={<TwixtIcon size="20" type="notification" variant="filled" />}
        hideLabel={true}
        onClick={toggleDropdown}
        overwriteClass="bg-transparent"
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-80 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
        >
          <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
            Notifications
          </div>
          <div>
            <NotificationItem
              leftContent={<ProfilePic label="JD" shortName />}
              altText="Bonnie Green avatar"
              name="Bonnie Green"
              message="New message from Bonnie Green: 'Hey, what's up? All set for the presentation?'"
              time="a few moments ago"
              iconColor="bg-primary-700"
              iconPath="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293zM3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
            />
            <NotificationItem
              leftContent={<ProfilePic label="JL" shortName />}
              altText="Jese Leos avatar"
              name="Jese Leos"
              message="Jese leos and 5 others started following you."
              time="10 minutes ago"
              iconColor="bg-gray-900"
              iconPath="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
            />
            <NotificationItem
              leftContent={<ProfilePic label="JM" shortName />}
              altText="Joseph McFall avatar"
              name="Joseph Mcfall"
              message="Joseph Mcfall and 141 others love your story. See it and view more stories."
              time="44 minutes ago"
              iconColor="bg-red-600"
              iconPath="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
            <NotificationItem
              leftContent={<ProfilePic label="RC" shortName />}
              altText="Roberta Casas image"
              name="Leslie Livingston"
              message="Leslie Livingston mentioned you in a comment: @bonnie.green what do you say?"
              time="1 hour ago"
              iconColor="bg-green-400"
              iconPath="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
            />
            <NotificationItem
              leftContent={<ProfilePic label="RB" shortName />}
              altText="Robert image"
              name="Robert Brown"
              message="Robert Brown posted a new video: Glassmorphism - learn how to implement the new design trend."
              time="3 hours ago"
              iconColor="bg-purple-500"
              iconPath="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
            />
          </div>
          <a
            href="#"
            className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
          >
            <div className="inline-flex items-center">
              <svg
                aria-hidden="true"
                className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              View all
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

const NotificationItem = ({ leftContent, name, message, time, iconColor, iconPath }) => {
  return (
    <a
      href="#"
      className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
    >
      <div className="flex-shrink-0">
        {leftContent}
        <span
          className={`absolute inline-flex items-center justify-center w-3 h-3 p-3 text-white rounded-full top-2 left-7 ${iconColor}`}
        >
          <svg
            aria-hidden="true"
            className="w-2 h-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={iconPath}></path>
          </svg>
        </span>
      </div>
      <div className="ml-3 w-full">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">{name}</span> {message}
        </p>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{time}</p>
      </div>
    </a>
  );
};

export default ApplicationShellHeaderNotificationPopover;
