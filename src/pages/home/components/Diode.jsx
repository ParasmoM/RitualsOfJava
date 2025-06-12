import React, { useEffect } from 'react'
import Section from '../../../components/section/Section'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

function Diode({ data, className }) {
    useIntersectionObserver(`${className}-content__title`, 'fade-in');
    useIntersectionObserver(`${className}-content__text`, 'fade-in');
    useIntersectionObserver(`${className}-content__button`, 'fade-in');
    useIntersectionObserver(`${className}-image__container`, 'fade-in');

    return (
        <Section className={className} {...data} />
    )
}

export default Diode