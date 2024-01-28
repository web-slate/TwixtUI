import React from 'react'

export default function UserStackList({ items = [] }) {

  return (
    <div className="flex flex-col md:flex-row gap-6 mx-10">
      <div className="flex-1 md:border-r md:border-gray-200">
        <ul role="list" class="divide-gray-100">
          {items.map(user => {
            const { name, location, profession, profileImageUrl, connectedTime } = user;

            return (
              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={profileImageUrl} alt={name} />
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">{name}</p>
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">{location}</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900">{profession}</p>
                  <p class="mt-1 text-xs leading-5 text-gray-500">Connected  <time datetime="2023-01-23T13:23Z">{connectedTime}</time></p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}