import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Topbar from './Topbar';
import Navigation from './Navigation';

export function Header() {
    const location = useLocation();
    const headerClass = location.pathname !== '/' && location.pathname !== '/home' ? 'alt-header' : 'main-header';
    const [scrollPosition, setScrollPosition] = useState(0);
    const headerClassModificateur = scrollPosition > 50 ? `${headerClass} main-header--scroll` : headerClass;

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

    return <header className={headerClassModificateur}>
        <div className="main-header__container">
            <Topbar className="top-bar" />
            <Navigation className="nav-bar" />
        </div>
    </header>;
}

export default Header