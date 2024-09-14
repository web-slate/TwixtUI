import React, { useState, useEffect } from 'react';
import TwixtLink from '../../CallsToAction/Link';

const Tabs = ({ items, direction = "horizontal", defaultActiveTab = 0, tabType = "underline" }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  useEffect(() => {
    setActiveTab(defaultActiveTab);
  }, [defaultActiveTab]);

  const renderIcon = (Icon) => {
    return Icon ? <Icon className="shrink-0 size-4" /> : null;
  };

  return (
    <div className={`tabs-component ${direction === 'vertical' ? 'flex flex-wrap' : ''}`}>
      <div className={`${direction === 'vertical' ? 'border-e mr-2' : 'border-b'} border-gray-200 dark:border-neutral-700`}>
        <nav
          className={`flex ${direction === 'vertical' ? 'flex-col space-y-4 pr-2' : 'gap-x-4'} `}
          aria-label="Tabs"
          role="tablist"
          aria-orientation={direction}
        >
          {items.map((item, index) => (
            <TwixtLink
              key={index}
              label={item.label}
              leftIcon={renderIcon(item.leftIcon)}
              rightIcon={renderIcon(item.rightIcon)}
              appendClass={`p-2 ${activeTab === index ? 'border-b border-b-blue-500' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(index);
              }}
            />
          ))}
        </nav>
      </div>
      <div className="mt-3">
        {items.map((item, index) => (
          <div
            key={index}
            id={`tab-panel-${index}`}
            role="tabpanel"
            className={activeTab === index ? '' : 'hidden'}
            aria-labelledby={`tab-item-${index}`}
          >
            <p className="text-gray-500 dark:text-neutral-400">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs
