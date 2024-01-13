import React from 'react';

const InputSingleLine = ({ label, value, onChange, onBlur, error, warning }) => {
    const inputClass = `shadow appearance-none border ${
        error ? 'border-red-500' : (warning ? 'border-yellow-500' : 'border-gray-300')
    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

    const labelClass = "block text-gray-700 text-sm font-bold mb-2";
    const errorClass = "text-red-500 text-xs italic";
    const warningClass = "text-yellow-500 text-xs italic";

    return (
        <div>
            {label && <label className={labelClass}>{label}</label>}
            <input 
                type="text" 
                value={value} 
                onChange={onChange} 
                onBlur={onBlur} 
                className={inputClass}
            />
            {error && <p className={errorClass}>{error}</p>}
            {warning && !error && <p className={warningClass}>{warning}</p>}
        </div>
    );
};

export default InputSingleLine;
