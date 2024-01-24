import React, { useState } from 'react'
import { InputSingleLine } from 'TwixtUI/react'

function UserNameInput() {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleBlur = () => {
        console.log('Input field lost focus');
    };

    return (
        <>
            <InputSingleLine
                label="User Name"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                error={value === '' ? 'Field cannot be empty' : ''}
                warning={value.length > 0 && value.length < 5 ? 'Text is too short' : ''}
            />
        </>
    )
}

export default UserNameInput
