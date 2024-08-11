import React from 'react'

const DEFAULT_BACKGROUND_URL = 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';

export default function TwixtUserCard({ title, subTitle = [], stats = [], cardImageUrl, cardBackgroundUrl = DEFAULT_BACKGROUND_URL, children }) {
  return (
    <div
      className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img className="object-cover object-top w-full" src={cardBackgroundUrl} alt="card background" />
      </div>
      <div className="mx-auto w-36 h-36 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-36" src={cardImageUrl} />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{title}</h2>
        {subTitle.map(subTitleItem => {
          return <p className="text-gray-500 text-sm">{subTitleItem}</p>
        })}
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        {stats.map(statsItem => {
          return (
            <li className="flex flex-col items-center justify-around">
              {statsItem?.label}
              <div className="text-sm">{statsItem?.value}</div>
            </li>
          );
        })}
      </ul>
      <div className='text-center'>
        {children}
      </div>
    </div>
  );
}