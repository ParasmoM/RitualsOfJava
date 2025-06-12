import React from 'react'

function RgpdModal({ onToggleModal }) {
    return (
        <div className="rgpd-modal--overlay">
            <button className="rgpd--close-btn" onClick={onToggleModal}>
                Fermer
            </button>

            <div className="rgpd--content">
                <h1>Mentions Légales</h1>

                <div>
                    <h2>1. Généralités</h2>
                    <p>
                        L’utilisation de ce site implique l’acceptation pleine et entière des conditions d’utilisation décrites ci-après. Ces conditions sont susceptibles d’être modifiées ou complétées à tout moment ; les utilisateurs sont donc invités à les consulter régulièrement.
                    </p>
                    <p>
                        Le site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut, toutefois, être décidée.
                    </p>
                    <p>
                        Le site est mis à jour régulièrement. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur, qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.
                    </p>
                </div>

                <div>
                    <h2>2. Description des services fournis</h2>
                    <p>
                        Ce site a pour objet de fournir une information concernant l’ensemble des services offerts et missions effectuées par l’entreprise ou la personne physique représentée.
                    </p>
                    <p>
                        Celle-ci s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne peut être tenue responsable des omissions, des inexactitudes, et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                    </p>
                    <p>
                        Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d’évoluer. Par ailleurs, les renseignements y figurant ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
                    </p>
                </div>

                <div>
                    <h2>3. Limitations contractuelles sur les données techniques</h2>
                    <p>
                        Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.
                    </p>
                </div>

                <div>
                    <h2>4. Propriété intellectuelle et contrefaçons</h2>
                    <p>
                        Le contenu de ce site web, incluant graphismes, images, textes, vidéos, animations, sons, logos, gifs, icônes, et leur arrangement, est exclusivement détenu par Rituals of Java, sauf pour les éléments appartenant à des tiers. La reproduction ou utilisation de ces éléments sans autorisation écrite préalable de Rituals of Java est strictement interdite et susceptible de poursuites.
                    </p>
                    <p>
                        Marco Parasmo détient les droits sur tous les éléments du site, sauf mention contraire. Toute action telle que la reproduction, modification ou publication sans l'accord de Marco Parasmo est interdite et sera traitée conformément aux lois sur la propriété intellectuelle.
                    </p>
                </div>

                <div>
                    <h2>5. Limitations de responsabilité</h2>
                    <p>
                        Marco Parasmo ne pourrait être tenues responsables des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès à ce site, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité. Ils ne pourront également être tenus responsables des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation de ce site.
                    </p>
                </div>

                <div>
                    <h2>6. Confidentialité et protection des données</h2>
                    <p>
                        Rituals of Java respecte la vie privée de ses visiteurs et clients. Actuellement, notre site ne collecte aucune donnée personnelle et est conforme aux principes de protection des données personnelles.
                    </p>
                </div>

                <div>
                    <h2>7. Les cookies</h2>
                    <p>
                        À l'heure actuelle, notre site ne fait usage d'aucun cookie pour collecter des informations personnelles ou suivre les activités de nos visiteurs. Nous nous engageons à respecter votre vie privée et à garantir une expérience transparente et sécurisée lors de votre navigation sur notre site.
                    </p>
                    <p>
                        Cependant, il est possible qu'à l'avenir, nous décidions d'utiliser des cookies dans le but d'améliorer nos services et l'expérience utilisateur. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à comprendre comment les visiteurs interagissent avec notre site, à personnaliser le contenu et les annonces, à fournir des fonctionnalités de médias sociaux et à analyser notre trafic.
                    </p>
                    <p>
                        Si nous décidons d'introduire l'utilisation de cookies, nous mettrons à jour cette section pour expliquer clairement les types de cookies utilisés, leur finalité, ainsi que les choix dont vous disposerez pour gérer ou refuser ces cookies. Votre consentement sera sollicité avant toute utilisation de cookies non strictement nécessaires à la fonctionnalité de base du site.
                    </p>
                    <p>
                        Nous vous invitons à consulter régulièrement cette section pour vous tenir informé de toute modification concernant l'utilisation des cookies sur notre site.
                    </p>
                </div>

                <div>
                    <h2>8. Loi applicable</h2>
                    <p>
                        Le présent site Internet et ses mentions légales sont régis par le droit belge, et tout litige éventuel lié à ce site sera soumis à la compétence exclusive des tribunaux de Belgique.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RgpdModal