import React, { useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import FooterMobile from './components/FooterMobile';
import FooterDesktop from './components/FooterDesktop';
import RgpdModal from './components/RgpdModal';
import useToggle from '../../hooks/useToggle';

function Footer() {
    const [isModalOpen, toggleModal] = useToggle(false);

    const { width } = useWindowSize();
    const breakpoint = 768;
    const isMobile = width <= breakpoint;
    const footerClass = isMobile ? 'footer--mobile' : 'footer--desktop';

    useEffect(() => {
        // Si le modal est ouvert, empêcher le défilement
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // Sinon, rétablir le défilement
            document.body.style.overflow = '';
        }

        // Optionnel: Nettoyer en rétablissant le défilement lors du démontage du composant
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]); 

    return (
        <footer className='footer'>
            <div className={`footer__container`}>
                {isMobile ? (
                    <FooterMobile footerClass={`${footerClass}`} />
                ) : (
                    <FooterDesktop />
                )}

                <div className='legal-notice'>
                    <button className='legal-notice-button' onClick={toggleModal}>
                        Mentions légales
                    </button>

                    <div className={`rgpd-modal${isModalOpen ? ' show' : ''}`}>
                        <RgpdModal onToggleModal={toggleModal}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer