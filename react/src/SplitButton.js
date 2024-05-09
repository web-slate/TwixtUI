import React, { useState } from 'react';

const SplitButton = ({ primaryAction, secondaryActions=[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePrimaryAction = () => {
        primaryAction.onClick();
    };

    const handleSecondaryAction = (action) => {
        action.onClick();
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600"
                onClick={handlePrimaryAction}
            >
                {primaryAction.text}
            </button>
            {secondaryActions.length > 0 && ( 
                <button
                    type="button"
                    className="ml-2 inline-flex justify-center w-8 h-full rounded-md border border-gray-300 shadow-sm px-2 bg-blue-500 text-white font-semibold hover:bg-blue-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 14l6-6v1H4v-1l6 6zm0 2a1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1 1 1 0 0 0 1 1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            )}

            {/* Dropdown menu */}
            {isOpen && secondaryActions.length > 0 && ( 
                <div className="origin-top-right absolute left-3 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                        {secondaryActions.map((action, index) => (
                            <button
                                key={index}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => handleSecondaryAction(action)}
                            >
                                {action.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SplitButton;
