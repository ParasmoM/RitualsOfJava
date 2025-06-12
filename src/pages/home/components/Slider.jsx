import React, { useState } from 'react';
import sliders from '../../../data/sliderData.json';
import { ArrowLeftAltRounded, ArrowRightAltRounded } from '../../../assets/icons/icons';
import { useEffect } from 'react';

function Slider() {
    const [sliderSelected, setSliderSelected] = useState(0);

    const handlePrevClick = () => {
        setSliderSelected(prev => prev > 0 ? prev - 1 : sliders.length - 1);
    };
    
    const handleNextClick = () => {
        setSliderSelected(prev => prev < sliders.length - 1 ? prev + 1 : 0);
    };

    const classForSlider = (sliderSelected, index) => sliderSelected === index ? 'selected' : '';

    useEffect(() => {
        const timer = setInterval(() => {
            handleNextClick(); // Déclenche le changement au slide suivant toutes les 3 secondes
        }, 4000); // 3000 ms = 3 secondes

        return () => clearInterval(timer); // Nettoie l'intervalle quand le composant est démonté ou mis à jour
    }, [sliderSelected]); // Ce useEffect dépend de `sliderSelected` pour se redéclencher à chaque changement de slide
    
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero-slider">
                    {sliders.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.path}
                            alt={slide.alt}
                            className={ classForSlider(sliderSelected, index) }
                        />
                    ))}
                </div>

                <div className="hero-pagination">
                    <button className="prev" onClick={handlePrevClick}>
                        <ArrowLeftAltRounded />
                    </button>

                    <button className="next" onClick={handleNextClick}>
                        <ArrowRightAltRounded />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Slider