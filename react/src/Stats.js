import React from 'react'

export default function Stats({ items = [] }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {items.map(({ label, value }) => {
            return (
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{value}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}