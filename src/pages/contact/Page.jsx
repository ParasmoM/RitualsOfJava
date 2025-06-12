import React from 'react';
import Field from "../../components/forms/Field"
import useTitle from '../../hooks/useTitle';
import FormContact from '../../components/forms/FormContact';

function Page() {
    useTitle("Contact - Rituals Of Java");

    return (
        <main className="contact-page">
            <section className="contact-page-hero">
                <h1>Nous contacter</h1>
            </section>

            <section className="contact-page__content">
                <div className="contact-page__info info">
                    <div className="info__container">
                        <div className="info-logo">
                            <img src="/images/logo_rituals_Beige.png" alt="Description" />
                        </div>

                        <div className="info-appointment">
                            <h3>La prise de rendez-vous</h3>
                            <p>Nous ne sommes ouverts que sur rendez-vous, n&#39;hésitez pas à nous contacter avant de vous rendre dans notre centre.</p>
                        </div>

                        <div className="info-opening-hours">
                            <h3>Heures d&#39;ouverture</h3>
                            <ul>
                                <li>Lundi. Fermé</li>
                                <li>Mardi. 09h30 - 18h00</li>
                                <li>Mercredi. Fermé</li>
                                <li>Jeudi. 12h00 - 18h00</li>
                                <li>Vendredi. 09h30 - 18h00</li>
                            </ul>
                        </div>

                        <div className="info-address">
                            <h3>Adresse du centre</h3>
                            <p>Rue de la résidence 7,</p>
                            <p>4031 Angleur</p>
                            <p>Tel. 0032 470 32 13 03</p>
                        </div>
                    </div>
                </div>

                <FormContact className={'form'} />
            </section>

        </main>
    )
}

export default Page