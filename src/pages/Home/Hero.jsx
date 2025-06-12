import { useEffect, useState } from "react";
import { ArrowLeftAltRounded, ArrowRightAltRounded } from "../../../public/media/icones/Icones"
import useSlider from "../../hooks/useSlider";

function Hero() {
    const galleries = [
        'banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg', 'banner5.jpg', 'banner6.jpg', 'banner7.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(galleries.length - 1);
    const [updatedGalleries, setUpdatedGalleries] = useState([]);

    const updateGalleries = (index) => {
        let selected = index + 1 > galleries.length - 1 ? 0 : index + 1;
        let start = selected - 1 < 0 ? galleries.length - 1 : selected - 1;
        let end = selected + 1 > galleries.length - 1 ? 0 : selected + 1;

        let slicedGalleries = [
            galleries[start],
            galleries[selected],
            galleries[end]
        ];

        return slicedGalleries;
    };

    useEffect(() => {
        const updatedImages = updateGalleries(currentIndex);
        setUpdatedGalleries(updatedImages);
    }, [currentIndex]);

    const nextHandleClick = () => {
        setCurrentIndex(prevIndex => {
            const updatedIndex = prevIndex + 1 > galleries.length - 1 ? 0 : prevIndex + 1;
            return updatedIndex;
        });
    };

    return (
        <section className="hero">
            <div className="hero__container">

                <div className="hero-slider">
                    {updatedGalleries.map((image, index) => (
                        <img
                            key={index}
                            src={`/public/media/banner/${image}`}
                            alt={`Slide ${index}`}
                            className={
                                index === 0 ? 'prev' :
                                index === 1 ? 'selected' :
                                index === 2 ? 'next' : ''
                            }
                        />
                    ))}
                </div>

                <div className="hero-pagination">

                    <button className="prev" >
                        <ArrowLeftAltRounded />
                    </button>

                    <button className="next" onClick={nextHandleClick}>
                        <ArrowRightAltRounded />
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Hero