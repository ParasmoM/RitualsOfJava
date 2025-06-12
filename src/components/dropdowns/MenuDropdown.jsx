import React, { useEffect, useState } from 'react'
import servicesData from "../../data/servicesData.json";
import { Chevron, Eye, EyeClosed } from "../../assets/icons/icons";
import { capitalizeFirstLetter } from '../../utils/utils.js';

function MenuDropdown({ sex, service, currentIndex, onChangeCurrent }) {
    const data = servicesData;
    const show = !!(sex && service);
    const [selectedCategory, setSelectedCategory] = useState(currentIndex);

    const handleCategoryClick = (index) => {
        setSelectedCategory(index);
        onChangeCurrent(index);
    };

    useEffect(() => {
        setSelectedCategory(currentIndex);
    }, [currentIndex]);

    return (
        <>
            {show &&
                <ul className="menu-list">
                    {data[sex][service]?.list &&
                        data[sex][service].list.map((item, index) => (
                            <li key={index} className={`categ ${selectedCategory === index ? 'selected' : ''}`} onClick={() => handleCategoryClick(index)}>
                                <button>
                                    <span>{capitalizeFirstLetter(item.title)}</span>
                                    {selectedCategory === index ?
                                        <Eye /> :
                                        <EyeClosed />
                                    }
                                </button>

                                <ul>
                                    {item.product
                                        .sort((a, b) => a.name.localeCompare(b.name))
                                        .map((product, index2) => (
                                            <li key={index2}>
                                                <span>{capitalizeFirstLetter(product.name)}</span>
                                                <span>{product.price} €</span>
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        ))
                    }

                    {/* {data[sex][service]?.description &&
                        <div className='description'>
                            {data[sex][service].description}
                        </div>
                    } */}

                    {data[sex][service]?.product &&
                        data[sex][service].product
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((product, index) => (
                                <li key={index} className="product">
                                    <span>{capitalizeFirstLetter(product.name)}</span>
                                    <span>{product.price} €</span>
                                </li>
                            ))
                    }
                </ul>
            }
        </>
    )
}

export default MenuDropdown