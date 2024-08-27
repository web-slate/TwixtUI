import TwixtLink from '../../CallsToAction/Link';
import TwixtIcon from '../../Icon';
import TwixtStackBox from '../../Containers/StackBox';
import TwixtBoxItem from '../../Containers/BoxItem';

import { format } from 'date-fns'; 
import React, { useState, useRef } from 'react';

const HoverCard = ({ children, cardDetails, position = 'right' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const whenFormatedDate = cardDetails?.when ? format(new Date(cardDetails?.when), cardDetails?.whenFormat || 'PPP') : 'No date available';

  // Determine the classes based on the position prop
  const positionClasses = {
    top: 'bottom-full mb-3',
    bottom: 'top-full mt-3',
    left: 'right-full mr-3',
    right: 'left-full ml-3',
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 300); // Adjust this delay as needed (in milliseconds)
  };

  return (
    <div
      className="relative group inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Popover Content */}
      <div
        className={`absolute ${positionClasses[position] || positionClasses.right} w-64 p-4 bg-white border border-gray-100 text-start rounded-xl shadow-md transition-opacity duration-300 z-10 ${
          isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <TwixtStackBox direction="vertical">
          <TwixtLink leftIcon={<TwixtIcon type="settings" variant="outline" />} label={cardDetails.id} link={cardDetails.idLink} overwriteClass="text-sm gap-1 mb-1" />
          <TwixtLink label={cardDetails.mainTitle} link={cardDetails.mainLink} overwriteClass="text-base" />
          {cardDetails?.whenLabel != null && <TwixtBoxItem overwriteClass="text-xs text-gray-300 mb-2">
            {cardDetails?.whenLabel} {whenFormatedDate}
          </TwixtBoxItem>}
        </TwixtStackBox>
        <div className="flex items-center gap-x-3 mb-4">
          {cardDetails.avatar != null && <img
            className="inline-block w-10 h-10 rounded-full"
            src={cardDetails.avatar}
            alt="Avatar"
          />}
          <div className="grow">
            <h4 className="font-semibold text-gray-800">{cardDetails.name}</h4>
            <span className="text-xs bg-gray-800 text-white py-0.5 px-1.5 rounded-md">
              {cardDetails.role}
            </span>
            <p className="text-sm text-gray-500">{cardDetails.title}</p>
          </div>
        </div>

        {/* User Details */}
        <ul className="space-y-2">
          {cardDetails.details.map((detail, index) => (
            <li key={index} className="flex items-center gap-x-2 text-sm text-gray-800">
              {detail.icon}
              {detail.content}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-4 flex justify-between items-center">
          <TwixtLink label={cardDetails.viewLabel} link={cardDetails.mainLink} overwriteClass="text-xs text-gray-500 hover:text-blue-600" />
          {/* <button className="py-1 px-3 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700">
            Follow
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
