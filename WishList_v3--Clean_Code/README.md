# WishList : client v2 : Titre Pro

## Note

> ⚠️ Cette version de l'application (v3) a été publiée pour montrer l'avancement de mon apprentissage/perfectionnement ; pour cela son code doit servir **uniquement** comme point de comparaison avec les versions 1 et 2. Pour plus d'informations se référer au fichier [README.md](../README.md) à la racine du projet.

## Technos & Outils

### Technologies utilisées

- [HTML](https://www.w3.org/html/) + [CSS](https://www.w3.org/Style/CSS/) / [SCSS (Sass)](https://sass-lang.com/) + [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript) / [JSX](https://fr.reactjs.org/docs/introducing-jsx.html)
- [React](https://reactjs.org/) (bibliothèque JavaScript)
- [ReactDOM](https://fr.reactjs.org/docs/react-dom.html) (injection des composants React dans le DOM)
- [prop-types](https://github.com/facebook/prop-types) (validation de props au sein du JSX)
- [React-Router](https://reactrouter.com/) (bibliothèque de routage (routing) standard)
- [Create-React-Model](https://create-react-app.dev/) (modèle React)
- [Bootstrap](https://getbootstrap.com/) (framework Front-End)
- [React-Bootstrap](https://react-bootstrap.github.io) (framework Front-End)
- [React Feather Icons](https://feathericons.com/) (collection d'icônes open source pour React.js)
- [Share This](https://github.com/sharethis-github/sharethis-reactjs) (boutons de partage sur les réseaux sociaux pour React)
- [Vercel](https://vercel.com) (plateforme de déploiement et de collaboration)

### Scripts Yarn & NPM

- `yarn start` ou `npm run start`: Lance le serveur de développement.
- `yarn build` ou `npm run build`: Lance la construction de la version de production (version prête pour hébergement dans un dossier `dist/`).
- `yarn lint` ou `npm run lint`: Affiche les erreurs dans le code.
- `yarn lint:fix` ou `npm run lint:fix`: Tente de corriger certaines des erreurs dans le code.
- `yarn clean` ou `npm run clean`: Supprime le dossier `dist/`.
- `yarn clean:all` ou `npm run clean:all`: Supprime `dist/`, `node_modules/` et les fichiers `lock`.

### Ajouter Bootstrap au projet

<!-- ! Nécessaire ? -->

1. Dans le dossier du projet $ `yarn add bootstrap`
2. dans **src/components/App/index.js** importer Bootstrap : `import 'bootstrap/dist/css/bootstrap.min.css`
3. ensuite on pourra ajouter les classes Bootstrap dans nos différents composants pour utiliser Bootstrap

### Déploiement

<!-- ToDo -->

## Preview

![preview](../doc/preview_v3.png)
