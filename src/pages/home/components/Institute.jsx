import React, { useEffect } from 'react'
import Section from '../../../components/section/Section'
import SectionAlt from '../../../components/section/SectionAlt';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

function Institute({ data, className }) {
    useIntersectionObserver('institute-heading h1', 'fade-in');
    useIntersectionObserver('institute-content__text', 'fade-in');
    useIntersectionObserver('institute-content__button', 'fade-in');
    useIntersectionObserver('institute-content-image__container', 'fade-in');

    return (
        <SectionAlt className={className} {...data} />
    )
}

export default Institute