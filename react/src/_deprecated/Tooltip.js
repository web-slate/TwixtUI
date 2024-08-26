import React from 'react'
import { useState } from 'react';

const TwixtTooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };
    return (
        <div>
            <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="cursor-pointer">{children}</span>
                {showTooltip && (
                    <div className="w-32 absolute z-10 bg-gray-400 text-white text-xs rounded py-1 px-2 top-3 left-full mt-1">   
                        {text}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TwixtTooltip
