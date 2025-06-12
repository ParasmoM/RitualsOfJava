import React, { useState } from 'react'
import { capitalizeFirstLetter } from '../../utils/utils.js';

function Radio({ className, data, onGenderChange }) {
    const [selectedGender, setSelectedGender] = useState('Femme');

    const handleGenderChange = (e) => {
        const gender = e.target.value;

        setSelectedGender(gender);
        onGenderChange(gender);
    };

    return (
        <div className={className}>
            {data.map((item, index) => (
                <label key={index}  className={selectedGender === item ? "selected" : ""}>
                    <input
                        type="radio"
                        value={item}
                        checked={selectedGender === item}
                        onChange={handleGenderChange}
                    />
                    {capitalizeFirstLetter(item)}
                </label>
            ))}
        </div>
    )
}

export default Radio