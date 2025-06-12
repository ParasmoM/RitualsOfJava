import Hero from "./Hero"

function HomePage() {
    return <main className="home-page">
        <Hero />
        
        <section className="sec-primary">
            <div className="sec-primary__container">
                <div className="sec-primary__content">
                    <h1 className="sec-primary__title">Le berceau du bien-être</h1>
                    <p className="sec-primary__text">
                        Depuis des siècles les Indonésiens ont développé leur propre culture autour du massage et des soins du corps, Il s’agit en fait d’une combinaison de « traitements » physiques et spirituels permettant d’atteindre une relaxation complète du corps et de l’esprit. Créer une atmosphère de calme et de sérénité lui permettant de se détendre au maximum. A l’apogée de la relaxation, les parfums, les couleurs et textures de certaines fleurs affectent les sens humains. D’après les habitants, les fleurs de Frangipanier, Ylang Ylang, Jasmin et autres Hibiscus sont les fleurs des Dieux suprêmes. Certains encens, ont de forts pouvoirs sur les âmes…
                    </p>
                </div>

                <div className="sec-primary__image">
                </div>
            </div>
        </section>
        
        <section className="sec-leni">
            <div className="sec-leni__container">
                <div className="sec-leni__image">
                    <div>
                        <img src="/images/desktop/leni_rituals_of_java.png" alt="Description" />
                    </div>
                </div>

                <div className="sec-leni__content">
                    <h1 className="sec-leni__title">Rencontrez Leni, Expert en Bien-Être chez Rituals of Java</h1>
                    <p className="sec-leni__text">
                        {`Forte de nombreuses années d'expertise dans l'univers de l'esthétique et du bien-être, je suis Leni, fondatrice de Rituals of Java. Ma passion pour les traditions de beauté m'a inspirée à vous offrir une expérience unique avec nos soins de prestige indonésiens, ancrés dans un héritage ancestral. Découvrez chez Rituals of Java comment les rituels de beauté indonésiens peuvent transformer et enrichir votre routine de soin.`}
                    </p>
                </div>
            </div>
        </section>
        
        <section className="sec-diode">
            <div className="sec-diode__container">
                <div className="sec-diode__content">
                    <h1 className="sec-diode__title">Diode laser</h1>

                    <div className="sec-diode__text">
                        <p>
                            Optez pour une épilation durable avec notre technologie laser à diode, adaptée à tous types de peau. Prenez rendez-vous pour une consultation sur mesure.
                        </p>
                        
                        <ul>
                            <li>
                                Notre Laser Diode représente la solution parfaite contre la repousse des poils indésirables.
                            </li>
                            <li>
                                Grâce à la technologie ice peltier, l&rdquo;épilation est désormais moins douloureuse.
                            </li>
                            <li>
                                Unique en son genre, il convient aux 6 phototypes de peau, contrairement à d&rdquo;autres méthodes.
                            </li>
                            <li>
                                Profitez de l&rdquo;épilation la plus rapide du marché, avec un traitement complet des jambes et du maillot en seulement 40 minutes.
                            </li>
                            <li>
                                La longueur d&rdquo;onde élevée de notre laser assure une pénétration profonde et efficace.
                            </li>
                            <li>
                                Notre technologie laser permet une épilation plus profonde et sécuritaire, en évitant le pigment mélanique, pour une peau protégée et douce.
                            </li>
                        </ul>
                    </div>
                    
                    <button className="sec-diode__button">
                        Nos services et tarifs
                    </button>
                </div>

                <div className="sec-diode__image">
                </div>
            </div>
        </section>
        
        <section className="sec-hydra">
            <div className="sec-hydra__container">
                <div className="sec-hydra__image">
                </div>

                <div className="sec-hydra__content">
                    <h1 className="sec-hydra__title">Hydrafacial</h1>

                    <div className="sec-hydra__text">
                        <ul>
                            <li>
                                Hydrafacial éclat purifiant

                                <p>
                                    Convient à tous types de peaux surtout pour la peau terne, acnéique, avec surplus séborrhéique, enleve les impuretés et comédons, donne de bons résultats , hydratation garantie et nettoyage profond de la peau.
                                </p>
                            </li>
                            <li>
                                Hydrafacial global anti âge

                                <p>
                                    Convient à tous types de peaux surtout la peau à partir d’un certain âge, nettoie en profondeur, stimule la production de collagène, raffermit et nourrit la peau en profondeur.
                                </p>
                            </li>
                        </ul>
                    </div>
                    
                    <button className="sec-hydra__button">
                        Nos services et tarifs
                    </button>
                </div>
            </div>
        </section>
        
        <section className="sec-office">
            <div className="sec-office__container">
                <div className="sec-office__title">
                    <h1>L’institut</h1>
                </div>
                
                <div className="sec-office__inner">

                    <div className="sec-office__content">

                        <div className="sec-office__text">
                            <p>
                                Nous vous accueillons dans notre bel espace composé d’une cabine double, 4 cabines simples, 4 places pour l’onglerie et un grand magasin. Nous avons un large choix de soins tel que l’épilation définitive, la pédicure médicale, les soins du visage, les épilations à la cire, l’endermologie LPG, les extensions et le rehaussement de cils etc…
                            </p>

                            <button className="sec-office__button">
                        Nos services et tarifs
                    </button>
                        </div>

                        <div className="sec-office__image">
                            <div>
                                <img src="/images/desktop/institut.jpg" alt="Description" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="sec-comment">
            <div className="sec-comment__container">
                <div className="sec-comment__notice">
                    <h1 className="notice__title">Partagez Votre Expérience</h1>

                    <div className="notice__content">
                        <div className="notice__item">
                            <div className="notice__profil">
                                <span className="avatar">

                                </span>
                                <div className="info">
                                    <p>Fabrizio Romano</p>
                                    
                                    <div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="notice__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <div className="notice__item">
                            <div className="notice__profil">
                                <span className="avatar">

                                </span>
                                <div className="info">
                                    <p>Fabrizio Romano</p>
                                    
                                    <div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="notice__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <div className="notice__item">
                            <div className="notice__profil">
                                <span className="avatar">

                                </span>
                                <div className="info">
                                    <p>Fabrizio Romano</p>
                                    
                                    <div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="notice__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>

                    <div className="notice__pagination">
                        <button className="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55L10 18Z"></path>
                            </svg>
                        </button>
                        <button className="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="sec-comment__note">
                    <div className="note__info">
                        <button className="note__info--reviews">44 avis</button>
                        <p>Des clients</p>
                    </div>

                    <div className="note__rating">
                        <div className="note__rating--icons">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                </svg>
                            </span>
                        </div>
                        
                        <p>
                            Note globale : 
                            <span> 5/5</span>
                        </p>
                    </div>

                    <button className="note__button">Déposer un avis</button>
                </div>
            </div>
        </section>
    </main>
}

export default HomePage