import React, { useEffect, useState } from 'react';
import servicesData from "../../data/servicesData.json";
import Radio from "../../components/forms/Radio";
import SelectDropdown from "../../components/dropdowns/SelectDropdown";
import MenuDropdown from "../../components/dropdowns/MenuDropdown";
import useTitle from '../../hooks/useTitle';

function Page() {
    const [gender, setGender] = useState('Femme');
    const [categ, setCateg] = useState('');
    const [current, setCurrent] = useState(0);
    const serviceKeys = Object.keys(servicesData);

    const handleGenderChange = (selectedGender) => {
        setGender(selectedGender);
    };

    const handleCategChange = (selectedCateg) => {
        setCateg(selectedCateg);
        setCurrent(0);
    };

    const handleCurrentChange = (index) => {
        setCurrent(index);
    };

    useEffect(() => {
        setCateg('');
    }, [gender]);

    useEffect(() => {
        setCurrent(0);
    }, [categ]);

    useTitle("Services - Rituals Of Java");

    return (
        <main className="service-page">
            <section className="service-page-hero">
                <h1>Nos soins</h1>
            </section>

            <section className="service-page-list">
                <div className="menu">

                    <Radio
                        data={serviceKeys}
                        onGenderChange={handleGenderChange}
                        className={'menu-gender'}
                    />

                    <p>
                        Pour afficher nos tarifs, veuillez d'abord sélectionner un service dans le menu déroulant ci-dessous.
                    </p>
                    
                    <SelectDropdown
                        sex={gender}
                        onCategChange={handleCategChange}
                        className={'menu-select'}
                    />

                    <MenuDropdown
                        sex={gender}
                        service={categ}
                        currentIndex={current}
                        onChangeCurrent={handleCurrentChange}
                    />

                </div>
            </section>
        </main>
    )
}

export default Page