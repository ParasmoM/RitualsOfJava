import PropTypes from 'prop-types'; 
import { Link, useLocation } from 'react-router-dom';

Navigation.propTypes = {
    className: PropTypes.string 
};

function Navigation({className}) {
    const navigation = {
        Accueil : '/',
        Contact : '/contact',
        Services : '/services'
    }

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`main-header__${className}`}>
            <ul>
                {Object.entries(navigation).map(([key, path]) => (
                    <li key={key} className={isActive(path) ? 'active' : ''}>
                        <Link to={path}>{key}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation