import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import HeaderMobile from './components/HeaderMobile';
import LogoTitle from '../../assets/Logo';
import LogoEmblem from "../../../public/images/logo_rituals_Beige.png"
import DataNavigation from '../../../src/data/navigation.json'
import HeaderDesktop from './components/HeaderDesktop';
import { useLocation } from 'react-router-dom';

function Header() {
    const { width } = useWindowSize();
    const pathname = useLocation();

    const breakpoint = 768;
    const isMobile = width <= breakpoint;
    const headerClass = isMobile ? 'header-main--mobile' : 'header-main--desktop';
    const navigation = DataNavigation;

    return (
        <header className={headerClass}>
            <div className={`${headerClass}__container`}>
                {isMobile ? (
                    <HeaderMobile
                        headerClass={`${headerClass}`}
                        logoTitle={<LogoTitle />}
                        logoEmblem={LogoEmblem}
                    >
                        {navigation}
                    </HeaderMobile>
                ) : (
                    <HeaderDesktop 
                        headerClass={`${headerClass}`}
                        pathname={pathname}
                    />
                )}
            </div>
        </header>
    );
}

export default Header 