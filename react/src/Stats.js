import React from 'react'

export default function Stats({isLoading = false, items = [] }) {
  return (
    <div className="bg-white py-2 sm:py-4">
      <div className="mx-auto max-w-7xl px-2 md:px-4 lg:px-6">
          { isLoading ? 
            (<div role="status" className='grid grid-cols-1 gap-x-4 gap-y-4 text-center lg:grid-cols-3'>
                <div className="mx-auto flex max-w-xs flex-col gap-y-2 md:gap-y-4 items-center animate-pulse">
                    <div className="w-52 h-2.5 bg-gray-400 rounded-full mb-2.5"></div>
                    <div className="w-52 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-2 md:gap-y-4 items-center animate-pulse">
                    <div className="w-52 h-2.5 bg-gray-400 rounded-full mb-2.5"></div>
                    <div className="w-52 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-2 md:gap-y-4 items-center animate-pulse">
                    <div className="w-52 h-2.5 bg-gray-400 rounded-full mb-2.5"></div>
                    <div className="w-52 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>) :
            (<dl className="grid grid-cols-1 gap-x-4 gap-y-4 text-center lg:grid-cols-3">
            {
                items.map(({ label, value }) => {
                    return (
                    <div className="mx-auto flex max-w-xs flex-col gap-y-2 md:gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">{label}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{value}</dd>
                    </div>
                    );
                })
            }
            </dl>)
        }
      </div>
    </div>
  );
}