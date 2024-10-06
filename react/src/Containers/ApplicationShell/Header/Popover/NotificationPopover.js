import React, { useState } from 'react';
import ProfilePic from '../../../../Communications/ProfilePic';
import TwixtIcon from '../../../../Icon';
import TwixtPopover from '../../../Popover';
import TwixtButton from '../../../../CallsToAction/Button';
import TwixtBoxItem from '../../../../Containers/BoxItem';
import TwixtNotificationItem from '../../../NotificationItem';

function ApplicationShellHeaderNotificationPopover() {
  return (
    <TwixtBoxItem overwriteClass="relative inline-block text-left">
      <TwixtPopover
        overwriteContentClass="w-80 list-none bg-white rounded shadow-lg rounded-xl"
        title="Notifications"
        hideOnBlur={false}
        content={
          <>
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
          </>}
        position="bottom-right"
      >
        {/* Notifications Button */}
        <TwixtButton
          leftIcon={<TwixtIcon size="20" type="notification" variant="filled" />}
          hideLabel={true}
          overwriteClass="bg-transparent"
        />
      </TwixtPopover>
    </TwixtBoxItem>
  );
}

export default ApplicationShellHeaderNotificationPopover;
