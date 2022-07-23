# WishList
Application web permettant de créer des listes d’articles en important leurs données depuis les sites marchands



# WishList : client v1 : Apothéose

## Introduction

WishList est une application web responsive, optimisée pour les mobiles (mobile-first) permettant de créer des listes d’articles/items en important leurs données depuis les sites marchands.

---

## Versions

> ⚠️ Important : cette version de l'application (v1) n'a été publiée que pour montrer l'avancement de mon apprentissage/perfectionnement ; pour cela son code doit servir **uniquement** comme point de comparaison avec les versions 2 et 3 :

### Client

- **[WishList : client v1 : Apothéose](https://github.com/Martin-GS/WishList_Client_v1--Apotheose)** (celle-ci)
  - Avril -> Mai 2021
  - application développée avec [Nicolas Benzadon](https://github.com/NicolasBNZ).
  - application développée pour un projet de fin d'études (École O'Clock)
  - Technos : HTML, CSS, Sass, JavaScript, React, React-Router, Axios.
- **[WishList : client v2 : Titre Pro](https://github.com/Martin-GS/WishList_Client_v2--Titre_Pro )**
  - Mai -> Juillet 2021
  - Reprise, révision et optimisation du code.
  - Ligne graphique changée. Implémentation du framework Bootstrap.
- **[WishList : client v3 : Clean code](https://github.com/Martin-GS/WishList_Client_v3--Clean_code )**
  - Juillet 2022
  - Reprise, révision et optimisation du code.
  - Correction de bugs et de certaines fonctionnalités (login, cycle de vie des composants, etc).

### API

- [WishList : API v1 : Apothéose](https://github.com/O-clock-Quill/projet-25-wishlist) : développée par [Nicolas Bernard](https://github.com/Nicolas-B06) et [Thomas Paulo](https://github.com/gibsonshelby), et déployée sur [Heroku](https://onedream-onewish.herokuapp.com)

---

## Technos & Outils

### Technologies utilisées

- [HTML](https://www.w3.org/html/) + [CSS](https://www.w3.org/Style/CSS/) / [SCSS (Sass)](https://sass-lang.com/) + [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript) / [JSX](https://fr.reactjs.org/docs/introducing-jsx.html)
- [React](https://reactjs.org/) (bibliothèque JavaScript)
- [ReactDOM](https://fr.reactjs.org/docs/react-dom.html) (injection des composants React dans le DOM)
- [prop-types](https://github.com/facebook/prop-types) (validation de props au sein du JSX)
- [React-Router](https://reactrouter.com/) (bibliothèque de routage (routing) standard)
- [React-Modele](https://github.com/O-clock-Quill/React-modele) (modèle React fourni par École O'Clock)
- [ESLint](https://eslint.org/) (linter / analyse de code)
- [Babel](https://babeljs.io/) (transcompilateur / rétrocompatibilité de code)
- [Webpack](https://webpack.js.org/) (packageur de modules et ressources)
- [PostCSS](https://postcss.org/) (loader CSS>SCSS)
- [Vercel](https://vercel.com) (plateforme de déploiement et de collaboration)

### Scripts Yarn & NPM

- `yarn start` ou `npm run start` : lance le serveur de développement.
- `yarn build` ou `npm run build` : lance la construction de la version de production
- `yarn lint` ou `npm run lint` : affiche les erreurs dans le code.
- `yarn lint:fix` ou `npm run lint:fix` : tente de corriger certaines des erreurs dans le code.
- `yarn clean` ou `npm run clean` : supprime le dossier `dist/`.
- `yarn clean:all` ou `npm run clean:all` : Supprime `dist/`, `node_modules/` et les fichiers `lock`.

### Déploiement (Vercel)

1. Créer un compte [Vercel](https://vercel.com)
2. Installation de Vercel : $ `npm install -g vercel`
3. Si erreur : $ `sudo npm install -g vercel --unsafe-perm`
4. Se placer dans le dossier du projet
5. $ `yarn build`
6. $ `vercel`
7. Suivre les étapes (bien indiquer le dossier dist/ comme dossier de déploiement)

---

![preview](./doc/preview.png)
