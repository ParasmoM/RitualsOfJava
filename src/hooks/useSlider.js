import { useState } from 'react';

function useSlider(galleries) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updatePrevSlides = (currentIndex) => {

        let start = currentIndex - 1 < 0 ? galleries.length - 1 : currentIndex - 1;
        let end = currentIndex + 1 > galleries.length - 1 ? 0 : currentIndex + 1;

        const slicedGalleries = [
            galleries[start],
            galleries[currentIndex],
            galleries[end]
        ];

        // console.log(slicedGalleries, start, currentIndex, end);
        return { end, slicedGalleries };
    };

    const updateNextSlides = (currentIndex) => {

        let selected = currentIndex + 1;
        let start = selected - 1 < 0 ? galleries.length - 1 : selected - 1;
        let end = selected + 1 > galleries.length - 1 ? 0 : selected + 1;

        const slicedGalleries = [
            galleries[start],
            galleries[selected],
            galleries[end]
        ];

        console.log(slicedGalleries, start, selected, end);
        return slicedGalleries;
    };

    return { updatePrevSlides, updateNextSlides, currentIndex, setCurrentIndex };
}

export default useSlider;






// import React, { useState } from 'react'

// export default function useSlider(galleries) {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const goToNextSlide = () => {
//         setCurrentIndex((prevIndex) => 
//         prevIndex === galleries.length - 1 ? 0 : prevIndex + 1
//         );
//     }

//     const goToPrevSlide = () => {
//         setCurrentIndex((prevIndex) => 
//         prevIndex === 0 ? galleries.length - 1 : prevIndex - 1
//         );
//     };

//     const getCurrentSlide = () => galleries[currentIndex];

//     return { currentIndex, goToNextSlide, goToPrevSlide, getCurrentSlide };
// }

// // ${currentIndex === index ? 'current' :
// //                                 currentIndex > index ? 'prev' :
// //                                 currentIndex < index ? 'next' : ''}