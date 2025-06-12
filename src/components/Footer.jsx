
export function Footer() {

    return <footer className="main-footer">

        <div className="main-footer__content">
            <div className="opening-hours">
                <h3>Heures d&#39;ouverture</h3>
                
                <ul>
                    <li>Lundi. 10h00 - 18h00</li>
                    <li>Mardi. 10h00 - 18h00</li>
                    <li>Mercredi. fermé</li>
                    <li>Jeudi. 12h30 - 20h30</li>
                    <li>Vendredi. 10h00 - 18h00</li>
                </ul>
            </div>

            <div className="logo-inner">
                <img src="/images/logo_rituals_Beige.png" alt="Description" />
            </div>
            
            <div className="address-info">
                <h3>Adresse</h3>

                <p>Boulevard Piercot 6,</p>
                <p>4000 Liège</p>
                <p>Tel. 0032 470 32 13 03</p>
            </div>
        </div>

        <div className="main-footer__bottom">
            <p>© 2022 - Rituals of Java</p>
            <a href="#" className="powered-by">powered by PARASMO</a>
        </div>

    </footer>
}

export default Footer