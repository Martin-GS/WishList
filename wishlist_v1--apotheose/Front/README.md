# WishList : Client v1 : Apothéose

## Note

> ⚠️ Cette version de l'application (v1) a été publiée pour montrer l'avancement de mon apprentissage/perfectionnement ; pour cela son code doit servir **uniquement** comme point de comparaison avec les versions 2 et 3. Pour plus d'informations se référer au fichier [README.md](../../README.md) à la racine du projet.

## Technos & Outils

### Technologies utilisées

- [HTML](https://www.w3.org/html/) + [CSS](https://www.w3.org/Style/CSS/) / [SCSS (Sass)](https://sass-lang.com/) + [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript) / [JSX](https://fr.reactjs.org/docs/introducing-jsx.html)
- [React](https://reactjs.org/) (bibliothèque JavaScript)
- [ReactDOM](https://fr.reactjs.org/docs/react-dom.html) (injection des composants React dans le DOM)
- [prop-types](https://github.com/facebook/prop-types) (validation de props au sein du JSX)
- [React-Router](https://reactrouter.com/) (bibliothèque de routage (routing) standard)
- Modèle React "École"
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

## Preview

![preview](../../doc/images/preview_v1.png)
