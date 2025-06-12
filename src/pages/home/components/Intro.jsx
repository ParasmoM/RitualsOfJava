import React, { useEffect } from 'react'
import Section from '../../../components/section/Section';
import useIntersectionObserve from '../../../hooks/useIntersectionObserver.js';

function Intro({ data, className }) {
    useIntersectionObserve('intro-content__title', 'fade-in');
    useIntersectionObserve('intro-content__text', 'fade-in');
    useIntersectionObserve('intro-image__container', 'fade-in');

    return (
        <Section className={className} {...data} />
    )
}

export default Intro