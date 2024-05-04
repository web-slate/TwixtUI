import React, { useState } from 'react';

const Toast = ({title, content}) => {
    const [showToast, setShowToast] = useState(false); 

    const handleButtonClick = () => {
        setShowToast(true); 
    };

    const handleCloseClick = () => {
        setShowToast(false); 
    };

    return (
        <div className="relative">
            {showToast && (
                <div className="fixed top-0 left-1/3 p-3 z-50 mx-auto">
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white">
                            <img src="..." className="rounded me-2" alt="..." />
                            <strong className="me-auto">{title}</strong>
                            <small>11 mins ago</small>
                            <button type="button" className="text-white" onClick={handleCloseClick} aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4">
                            {content}
                        </div>
                    </div>
                </div>
            )}
            <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" id="liveToastBtn" onClick={handleButtonClick}>
                Show toast
            </button>
        </div>
    );
};

export default Toast;
