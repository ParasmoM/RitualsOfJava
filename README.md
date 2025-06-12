# Ritual of Java — Projet d'examen

**Ritual of Java** est un site web fictif d’un établissement de bien-être, réalisé dans le cadre de mon examen final. Ce projet met en pratique mes compétences en développement web moderne avec React.

---

## Objectifs du projet

Ce projet répond aux exigences pédagogiques de l’examen :

- Structuration sémantique des pages
- Utilisation de **React** pour la création de composants réutilisables
- Mise en place de **styles SCSS** organisés et maintenables
- Responsive design fonctionnel sur :
  - Mobile
  - Écran < 1024px
  - Écran < 1600px
  - Écran ≥ 1600px
- Site exploitable en réseau local
- Navigation fluide via un menu principal

---

## Technologies utilisées

- **React**
- **Vite** (serveur de développement rapide)
- **SCSS** pour les styles modulaires
- **Responsive Web Design**
- HTML5 sémantique via JSX

---

## Pages du site

Le site comprend 4 pages principales :

| Page        | Description |
|-------------|-------------|
| **Accueil** | Présentation de l’univers de l’établissement |
| **Media**   | Intégration d’une vidéo YouTube + contenu visuel enrichi |
| **Soins**   | Mise en avant des services bien-être avec descriptions |
| **Contact** | Formulaire de contact complet (nom, email, message, etc.) |

---

## Structure du projet

RitualOfJava/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── styles/
│   │   │   ├── scss/
│   │   │   │   ├── abstracts/
│   │   │   │   ├── animations/
│   │   │   │   ├── base/
│   │   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   └──  main.scss
│   │   │   ├── main.css
│   │   │   └── main.css.map
│   │   ├── Logo.jsx
│   │   └── LogoEmblem.jsx
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── router/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package-lock.json
├── package.json
└── README.md

## Lancer le projet en local

1. **Cloner le projet** :
   ```bash
   git clone https://github.com/ParasmoM/RitualsOfJava.git
   cd RitualsOfJava

2.	Installer les dépendances :
    npm install

3.	Lancer le serveur de développement :
    npm run dev