import React, { useEffect } from 'react'
import logo from "../../../../public/images/logo_rituals_Beige.png"
import Copyright from '../../Copyright';

function FooterDesktop() {
    useEffect(() => {
        // Fonction de callback pour gérer l'intersection
        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Action à effectuer quand l'élément est visible
                    entry.target.classList.add('fade-in');

                    // Nettoyage de l'observer lors du démontage du composant
                    observer.unobserve(entry.target);
                }
            });
        };

        // Options pour l'IntersectionObserver
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: [.4, 1.0]
        };

        // Sélection de l'élément cible
        const target = document.querySelector('.footer');

        // Création d'un nouvel IntersectionObserver
        const observer = new IntersectionObserver(handleIntersect, options);

        // Vérification si l'élément cible existe
        if (target) {
            // target.style.opacity = 0;
            // Observation de l'élément cible
            observer.observe(target);
        }
    }, []);

    return <div className="footer__content">
        <div className="main-footer">
            <div className="opening-hours">
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

            <div className="logo-inner">
                <img src={logo} alt="Logo rituals of java" />
            </div>

            <div className="address-info">
                <h3>Adresse</h3>

                <p>Rue de la résidence 7,</p>
                <p>4031 Angleur</p>
                <p>Tel. 0032 470 32 13 03</p>
            </div>
        </div>

        <div className="footer__copyright">
            <Copyright name={'Rituals of Java'} />
        </div>
    </div>
}

export default FooterDesktop