import React from 'react';

const violetBadge = 'cursor-pointer w-8 h-8 grid place-items-center text-base rounded-full text-white bg-violet-700';
const indigoBadge = 'cursor-pointer max-w-16 px-4 py-2 flex items-center text-base rounded-full text-indigo-500 border border-indigo-500';

const TwixtBadges = ({ text, overwriteClass, variant = 'violet' }) => {
    const badgeClass = variant === 'violet' ? violetBadge : indigoBadge;

    return (
        <div className={overwriteClass || badgeClass}>
            <span className="p-1">
                {text}
            </span>
        </div>
    );
}

export default TwixtBadges;
