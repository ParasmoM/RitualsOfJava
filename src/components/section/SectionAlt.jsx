import React from 'react'
import { Link } from 'react-router-dom';

// Fonction pour traiter le texte de type chaîne de caractères
function stringAction(text) {
    return <p>{text}</p>;
}

// Fonction pour traiter le texte de type objet
function objectAction(text) {
    const dynamicContent = [];

    if (text.p) {
        dynamicContent.push(<p key="paragraph">{text.p}</p>);
    }

    if (text.ul && Array.isArray(text.ul)) {
        let listItems = [];

        listItems = text.ul.map((li, index) => {
            return <li key={index}>{li}</li>
        });

        dynamicContent.push(<ul key="list">{listItems}</ul>);
    }

    return dynamicContent;
}

// Fonction pour traiter le texte alternatif sous forme de paragraphes et d'en-têtes
function textAltAction(textAlt) {
    return textAlt.map((element, index) => {
        if (index % 2 !== 0) {
            return <p key={index}>{element}</p>;
        } else {
            return <h3 key={index}>{element}</h3>;
        }
    });
}

/**
 * Composant NewSection : Affiche une section avec un contenu dynamique.
 * @param {string} title - Le titre de la section (optionnel).
 * @param {string} image - L'URL de l'image à afficher.
 * @param {string} alt - L'attribut alt pour l'image.
 * @param {string|Object} text - Le contenu textuel de la section (peut être une chaîne de caractères ou un objet).
 * @param {Object} button - Les détails du bouton (path et name) pour un lien (optionnel).
 * @param {string[]} textAlt - Le contenu textuel alternatif à afficher sous forme de paragraphes et d'en-têtes (optionnel).
 * @returns {JSX.Element} - La section avec le contenu dynamique.
 */
function SectionAlt({ title, image, alt, text, button, textAlt, className }) {
    const showImage = !!(image && alt);
    let dynamicContent = null;

    const handleAction = {
        string: stringAction,
        object: objectAction,
        textAlt: textAltAction,
    };

    if (typeof text === 'string') {
        dynamicContent = handleAction['string'](text);
    } else if (typeof text === 'object') {
        dynamicContent = handleAction['object'](text);
    } else if (Array.isArray(textAlt)) {
        dynamicContent = handleAction['textAlt'](textAlt);
    }

    return (
        <div className={`${className}__container`}>
            <div className={`${className}-heading`}>
                {title && (
                    <h1>{title}</h1>
                )}
                <span></span>
            </div>

            <div className={`${className}-content`}>
                <div className={`${className}-content__container`}>
                    <div className={`${className}-content__text`}>

                        {dynamicContent}

                        {button && (
                            <Link to={button.path} className={`${className}-content__button`}>
                                {button.name}
                            </Link>
                        )}
                    </div>

                    <div className={`${className}-content-image`}>
                        <div className={`${className}-content-image__container`}>
                            {showImage && (
                                <img src={image} alt={alt} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionAlt