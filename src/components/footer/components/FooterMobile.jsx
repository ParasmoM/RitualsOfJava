import React, { useEffect } from 'react'
import { Chevron, Cross, FacebookIcone, InstagramIcone } from '../../../assets/icons/icons'
import Copyright from '../../Copyright'
import useToggle from '../../../hooks/useToggle';

function FooterMobile({ footerClass }) {
    const [isModalOpen, toggleModal] = useToggle(false);

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

    return <>
        <button className={`${footerClass}__button`} onClick={toggleModal}>
            <span>PLUS</span>
            <Chevron />
        </button>

        <div className={`${footerClass}__modal modal${isModalOpen ? ' show' : ''}`}>
            <div className='modal__container'>
                <button className="modal-action" onClick={toggleModal}>
                    <Cross />
                </button>

                <div className="modal-opening-hours">
                    <h3>Heures d&#39;ouverture</h3>

                    <p>
                        Nous ne sommes ouverts que sur rendez-vous, n'hésitez pas à nous contacter avant de vous rendre dans notre centre.
                    </p>

                    <ul>
                        <li>Lundi. Fermé</li>
                        <li>Mardi. 09h30 - 18h00</li>
                        <li>Mercredi. Fermé</li>
                        <li>Jeudi. 12h00 - 18h00</li>
                        <li>Vendredi. 09h30 - 18h00</li>
                    </ul>
                </div>

                <div className="modal-address">
                    <h3>Adresse du centre</h3>
                    <p>Rue de la résidence 7,</p>
                    <p>4031 Angleur</p>
                    <p>Tel. 0032 470 32 13 03</p>
                </div>

                <div className="modal-socials">
                    <a href='https://m.facebook.com/ritualsofjava' rel="noopener noreferrer">
                        <FacebookIcone />
                    </a>
                    <a href='https://www.instagram.com/kartikanurleni/' rel="noopener noreferrer">
                        <InstagramIcone />
                    </a>
                </div>
            </div>
        </div>

        <div className={`${footerClass}__copyright`}>
            <Copyright />
        </div>
    </>
}

export default FooterMobile