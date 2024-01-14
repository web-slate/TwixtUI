import React from 'react';


const InputSingleLine = ({ label, value, onChange, onBlur, error, warning }) => {
    const inputClass = `shadow appearance-none border ${
        error ? 'border-red-500' : (warning ? 'border-yellow-500' : 'border-gray-300')
    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;

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
