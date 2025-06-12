import React, { useEffect } from 'react'
import Section from '../../../components/section/Section'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

function Leni({ data, className }) {
    useIntersectionObserver('leni-content__title', 'fade-in-leni');
    useIntersectionObserver('leni-content__text', 'fade-in');
    useIntersectionObserver('leni-image__container', 'fade-in-leni');
    
    return (
        <Section className={className} {...data} />
    )
}

export default Leni