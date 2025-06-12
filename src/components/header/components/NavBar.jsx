import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function NavBar({ data, onLinkClick }) {
    const { pathname } = useLocation();

    /**
     * Vérifie si le chemin est actif.
     * @param {string} path - Chemin à vérifier.
     * @returns {boolean} - Retourne vrai si le chemin est actif, sinon faux.
     */
    const isActive = (path) => pathname === path;

    return <>
        {data.map(({ title, path }) => ( 
            
            <Link
                key={path}
                className={isActive(path) ? 'active' : ''}
                to={path}
                onClick={onLinkClick}
                >
                
                {title}
            
            </Link>

        ))}
    </>
}

export default NavBar