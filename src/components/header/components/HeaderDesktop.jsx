import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../../assets/Logo"
import { FacebookIcone, InstagramIcone } from "../../../assets/icons/icons";

function HeaderDesktop({ pathname, headerClass }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    // const headerClassModifier = scrollPosition > 50 ? `${headerClass} ${headerClass}--scroll` : headerClass;

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={headerClass}>
            <div className={`${headerClass}__container`}>
                <TopBar headerClass={headerClass} />
                <NavBar pathname={pathname} headerClass={headerClass} />
            </div>
        </header>
    )
}

function TopBar({ headerClass }) {
    return (
        <div className={`${headerClass}__top-bar`}>
            <div className={`top-bar__socials`}>
                <a href='https://m.facebook.com/ritualsofjava' rel="noopener noreferrer">
                    <FacebookIcone />
                </a>
                <a href='https://www.instagram.com/kartikanurleni/' rel="noopener noreferrer">
                    <InstagramIcone />
                </a>
            </div>

            <div className={`top-bar__logo`}>
                <Logo />
            </div>
        </div>
    );
}

function NavBar({ pathname, headerClass }) {
    const navigation = {
        Accueil: '/',
        Services: '/services',
        Contact: '/contact',
    }

    /**
     * Vérifie si le chemin est actif.
     * @param {string} path - Chemin à vérifier.
     * @returns {boolean} - Retourne vrai si le chemin est actif, sinon faux.
     */
    const isActive = (path) => pathname === path;

    return (
        <nav className={`${headerClass}__nav-bar`}>
            <ul>
                {Object.entries(navigation).map(([key, path], index) => (
                    <li key={index} className={isActive(path) ? 'active' : ''}>
                        <Link to={path}>{key}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default HeaderDesktop;