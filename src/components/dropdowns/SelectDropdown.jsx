import React, { useEffect, useRef, useState } from 'react'
import servicesData from "../../data/servicesData.json";
import { Chevron } from "../../assets/icons/icons";
import { capitalizeFirstLetter } from '../../utils/utils.js';

function SelectDropdown({ className, onCategChange, sex }) {

    const [selected, setSelected] = useState('Nos services');
    const [showChoices, setShowChoices] = useState(false);
    const containerRef = useRef(null);

    const serviceKeys = Object.keys(servicesData[sex]);

    // Mettre à jour le state 'selected' lorsque 'sex' change
    useEffect(() => {
        setSelected('Nos services');
    }, [sex]);

    const toggleChoices = () => {
        setShowChoices(!showChoices);
    };

    const handleServiceClick = (service) => {
        setSelected(service);
        setShowChoices(false);
        onCategChange(service);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowChoices(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={className}  ref={containerRef}>
            <button onClick={toggleChoices}>
                {capitalizeFirstLetter(selected)}
                <Chevron />
            </button>

            {showChoices && (
                <ul>
                    {serviceKeys
                        .sort((a, b) => a.localeCompare(b))
                        .map((service, index) => (
                            <li key={index} value={service} onClick={() => handleServiceClick(service)}>
                                {capitalizeFirstLetter(service)}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    )
}

export default SelectDropdown