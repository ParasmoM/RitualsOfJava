import { FacebookIcone, InstagramIcone } from '../../../public/media/socialIcones/icones';
import PropTypes from 'prop-types';

Topbar.propTypes = {
    className: PropTypes.string
};

function Topbar({ className }) {
    return (
        <div className={`main-header__${className}`} >
            <div className={`${className}__socials`} >
                <a href='https://www.facebook.com/ritualsofjava/photos' rel="noopener noreferrer">
                    <FacebookIcone />
                </a>
                <a href='https://www.instagram.com' rel="noopener noreferrer">
                    <InstagramIcone />
                </a>
            </div>

            <div className={`${className}__logo`} >
                <img src="/images/logo_rituals_simple.jpg" alt="Description" />
            </div>
        </div>
    );
}

export default Topbar;