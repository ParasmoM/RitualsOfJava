import React, { useEffect } from 'react'
import useToggle from '../../../hooks/useToggle';
import { ChevronRight } from '../../../assets/icons/icons';
import Copyright from '../../Copyright';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function HeaderMobile({ headerClass, logoTitle, logoEmblem, children }) {
    const [isMenuOpen, toggleMenu] = useToggle(false);

    useEffect(() => {
        // Si le modal est ouvert, empêcher le défilement
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // Sinon, rétablir le défilement
            document.body.style.overflow = '';
        }

        // Optionnel: Nettoyer en rétablissant le défilement lors du démontage du composant
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return <>
        <Link to='/home' className={`${headerClass}__logo`}>
            {logoTitle}
        </Link>

        <button className={`${headerClass}__btn`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div className={`${headerClass}__menu menu${isMenuOpen ? ' show' : ''}`}>
            <div className={`menu__container`}>

                <div className="menu__logo">
                    <img src={logoEmblem} alt="Logo rituals of java" />
                </div>

                <div className="menu__nav">
                    <button onClick={toggleMenu}>
                        <ChevronRight />
                    </button>

                    <nav>
                        <NavBar data={children} onLinkClick={toggleMenu} />
                    </nav>
                </div>

                <div className="menu__footer">
                    <Copyright name={'Rituals of Java'} />
                </div>

            </div>
        </div>
    </>
}

export default HeaderMobile