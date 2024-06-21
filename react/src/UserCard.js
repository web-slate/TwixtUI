import React from 'react'

export default function UserCard({ title, subTitleList = [], stats = [], cardImageUrl, cardBackgroundUrl }) {
  return (
    <div class="flex flex-col justify-center items-center h-[100vh]">
      <div class="relative flex flex-col items-center rounded-10 border-1 border-gray-200 w-400 mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
          <img src={cardBackgroundUrl} class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
          <div class="absolute bottom-12 flex items-center justify-center rounded-full border-4 border-white bg-pink-400 border-white-500 w-8/12">
            <img class="h-7 w-7 rounded-full" src={cardImageUrl} alt={title} />
          </div>
        </div>
        <div class="mt-16 flex flex-col items-center">
          <h4 class="text-xl mt-4 font-bold text-navy-700 dark:text-white">
            {title}
          </h4>
          {subTitleList.map(subTitleItem => {
            return <p class="text-base font-normal text-gray-600">{subTitleItem}</p>
          })}
        </div>
        <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
          {stats.map(statsItem => {
            return (
              <div class="flex flex-col items-center justify-center">
                <p class="text-sm font-bold text-navy-100 text-black">{statsItem?.label}</p>
                <p class="text-sm font-normal text-gray-600">{statsItem?.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}