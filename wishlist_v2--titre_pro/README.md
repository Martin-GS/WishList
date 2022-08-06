# WishList : client v2 : Titre Pro

## Note

> ⚠️ Cette version de l'application (v2) n'a été publiée pour montrer l'avancement de mon apprentissage/perfectionnement ; pour cela son code doit servir **uniquement** comme point de comparaison avec les versions 1 et 3. Pour plus d'informations se référer au fichier [README.md](../README.md) à la racine du projet.

## Technos & Outils

### Technologies utilisées

- [HTML](https://www.w3.org/html/) + [CSS](https://www.w3.org/Style/CSS/) / [SCSS (Sass)](https://sass-lang.com/) + [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript) / [JSX](https://fr.reactjs.org/docs/introducing-jsx.html)
- [React](https://reactjs.org/)
- [ReactDOM](https://fr.reactjs.org/docs/react-dom.html)
- [prop-types](https://github.com/facebook/prop-types)
- [React-Router](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [React-Bootstrap](https://react-bootstrap.github.io)
- [React Feather Icons](https://feathericons.com/)
- [Share This](https://github.com/sharethis-github/sharethis-reactjs)
- [Vercel](https://vercel.com)

### Scripts Yarn & NPM

- `yarn start` ou `npm run start`: Lance le serveur de développement.
- `yarn build` ou `npm run build`: Lance la construction de la version de production (version prête pour hébergement dans un dossier `dist/`).
- `yarn lint` ou `npm run lint`: Affiche les erreurs dans le code.
- `yarn lint:fix` ou `npm run lint:fix`: Tente de corriger certaines des erreurs dans le code.
- `yarn clean` ou `npm run clean`: Supprime le dossier `dist/`.
- `yarn clean:all` ou `npm run clean:all`: Supprime `dist/`, `node_modules/` et les fichiers `lock`.

### Ajouter Bootstrap au projet

1. Dans le dossier du projet $ `yarn add bootstrap`
2. dans **src/components/App/index.js** importer Bootstrap : `import 'bootstrap/dist/css/bootstrap.min.css`
3. ensuite on pourra ajouter les classes Bootstrap dans nos différents composants pour utiliser Bootstrap

### Déploiement (Netlify)

1. créer un compte [Netlify](https://netlify.app/)
2. Se loguer
3. cliquer sur le bouton "Create a new site"
4. suivre le "pas-à-pas" (on doit lui donner les permissions affin que Netlify puisse accéder au(x) dépôt(s) GitHub)
5. si on possède un nom de domaine personnalisé : Settings > Domain Management

## Preview

![preview](../doc/images/preview_v2.png)
