# Cahier des charges

## Le projet

### Présentation du projet

Application de création, gestion et partage de listes d'items/articles, avec la possibilité d’importer leurs informations (lien vers le site marchand, titre, description, image, etc) via leur url.

### Besoins (problèmes auxquels répond le projet)

- centraliser les articles/items trouvés à un seul endroit
- creer, modifier et supprimer les listes en un clic
- partager les listes
- créer des listes pour des evenements spécifiques (mariage, naissance, etc)
- listes "simples" de courses (qui enregistre tous les articles déjà achetés pour pouvoir les réutiliser)

### Objectifs (solutions qu'apporte le projet)

- centraliser les listes
- rappel des objets trouvés
- éviter les oublis et les achats inutiles
- lister les objets qu'on trouve pour nous mêmes ou quelqu'un
- partager les articles trouvés
- créer des listes communes (groupe de personnes) pour offir des cadeaux à une personne

### Cible

Application généraliste, pour madame et monsieur tout le monde, dès le petit de 9 ans à la mamie de 90.

## Fonctionnalités

### Le MVP (Minimum Viable Product)

**Indispensable**

- **Accès au compte**
- **édition du compte**
- **gestion des listes**
- **gestion des items (édition simple/unitaire/individuelle)**
- **gestion des types d’item**
  - **transformation de l’url**
- **accéder aux mentions légales**
- **accéder à la page de contacts**

### Évolutions potentielles

- gestion des items
  - edition multiple
- gestion des types d’item
  - texte simple
  - prendre une photo
- activation/désactivation des items
- barre de recherche
- gestion des catégories/ tag
  - Catégorie: thème/personne/date non éditables
  - tag éditables
- gestion des favoris
- archivage
- Partager avec son entourage
  - interne à l’app
  - plus vaste (RS, email…)
- Ajouter des pub pour monétiser
- Extension pour navigateur
- Création d’une cagnotte de personnes externes
- Mise en place d’une messagerie d’échange entre admin et utilisateur

## Technos

### API/Back

- Node
- express
- joy
- sqitch

### Client/Front

#### 1. Client & API

##### Client

- Dépot du client : [Wishlist_client_v2--React_n_Bootstrap](https://github.com/Martin-GS/Wishlist_client_v2--React_n_Bootstrap)
- Adresse du client : [https://www.wishlist-app.com](https://www.wishlist-app.com)

##### API

- Dépot de l'API : [Projet-25-wishlist](https://github.com/O-clock-Quill/projet-25-wishlist)
- Adresse de l'API : [https://onedream-onewish.herokuapp.com/](https://onedream-onewish.herokuapp.com/)

#### 2. Technos & Outils

- [HTML](https://www.w3.org/html/) + [CSS](https://www.w3.org/Style/CSS/) / [SCSS (Sass)](https://sass-lang.com/) + [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript) / [JSX](https://fr.reactjs.org/docs/introducing-jsx.html)
- [React](https://reactjs.org/) (bibliothèque JavaScript)
- [ReactDOM](https://fr.reactjs.org/docs/react-dom.html) (injection des composants React dans le DOM)
- [prop-types](https://github.com/facebook/prop-types) (validation de props au sein du JSX)
- [React-Router](https://reactrouter.com/) (bibliothèque de routage (routing) standard)
- [React-Modele](https://github.com/O-clock-Quill/React-modele) (modèle React fourni par O'Clock)
- [ESLint](https://eslint.org/) (linter / analyse de code)
- [Babel](https://babeljs.io/) (transcompilateur / rétrocompatibilité de code)
- [Webpack](https://webpack.js.org/) (packageur de modules et ressources)
- [PostCSS](https://postcss.org/) (loader CSS>SCSS)
- [Bootstrap](https://getbootstrap.com/) (framework Front-End)
- [React-Bootstrap](https://react-bootstrap.github.io) (framework Front-End)
- [React Feather Icons](https://feathericons.com/) (collection d'icônes open source pour React.js)
- [Share This](https://github.com/sharethis-github/sharethis-reactjs) (boutons de partage sur les réseaux sociaux pour React)
- [Vercel](https://vercel.com) (plateforme de déploiement et de collaboration)
- [Visual Studio Code](https://code.visualstudio.com/) (éditeur)
- React Dev Tools (pour [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) et [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))

#### 3. Scripts Yarn & NPM

- `yarn start` ou `npm run start`: Lance le serveur de développement.
- `yarn build` ou `npm run build`: Lance la construction de la version de production (version prête pour hébergement dans un dossier `dist/`).
- `yarn lint` ou `npm run lint`: Affiche les erreurs dans le code.
- `yarn lint:fix` ou `npm run lint:fix`: Tente de corriger certaines des erreurs dans le code.
- `yarn clean` ou `npm run clean`: Supprime le dossier `dist/`.
- `yarn clean:all` ou `npm run clean:all`: Supprime `dist/`, `node_modules/` et les fichiers `lock`.

#### 4. Ajouter le modèle React

1. Récupérer une copie du modèle React fourni par l'École O'Clock, dans un dossier "indépendant" (autre selui du projet) : `git clone git@github.com:O-clock-Quill/React-modele.git`
2. Se placer dans le dossier du projet
3. Copier les fichiers cachés et non-cachés présents à la racine du modèle : `cp -n ../React-modele/{.*,*} .`
4. Copie des dossiers src/, config/, tests/ et public/ : `cp -rn ../React-modele/{src,config,public,tests} .`
5. Installation des dépendances listées dans le fichier package.json : `yarn`
6. Lancement du serveur de dev : `yarn start`

#### 5. Ajouter Bootstrap au projet

1. Dans le dossier du projet $ `yarn add bootstrap`
2. dans __src/components/App/index.js__ importer Bootstrap : `import 'bootstrap/dist/css/bootstrap.min.css`
3. ensuite on pourra ajouter les classes Bootstrap dans nos differents composants pour utiliser Bootstrap

> Astuce : dans VSCode, en écrivant `rcc` (pour React Create Component) + `TAB`, VSCode ajoute la structure du composant automatiquement

#### 6. Déploiement

1. Créer un compte [Vercel](https://vercel.com)
2. Installation de Vercel : $ `npm install -g vercel`
3. Si erreur : $ `sudo npm install -g vercel --unsafe-perm`
4. Se placer dans le dossier du projet
5. $ `yarn build`
6. $ `vercel`
7. Suivre les étapes (bien indiquer le dossier dist/ comme dossier de déploiement)

## Navigateurs compatibles

Application **Mobile first** avec compatibilité desktop.

## Arborescence et Routes

cf 03-Arborescence_et_routes.pdf

### Arborescence de l'application (le chemin de l'utilisateur)

- Page d'accueil
  - Utilisateur non enregistré
    - Page d’inscription
  - Utilisateur enregistré
    - page de connexion
    - page profil
    - Page de connexion
    - page des listes
    - page d'une liste : liste des items/articles
- Page Mentions légales
- Formulaire de contact
- page 404

### Routes prévues

- Accueil : /
- Inscription : /signup
- Connexion : /signin
- Profil administrateur : /admin/profile
- Profil utilisateur : /userName/profile
- Listes : /userName/lists
- une liste : /userName/listID
- Mentions légales : /legal
- Contact : /contact
- Page 404 : /notfound

## User stories

|En tant que ...|J'ai besoin de ...|Afin de ...
|---|---|---
|visiteur|consulter la page d'accueil|
|visiteur|pouvoir m'inscrire|avoir un compte et créer des listes
|visiteur|accéder à la page contact|entrer en contact avec l’administrateur
|visiteur|accéder à la page mentions légales|prendre connaissance des mentions légales
|utilisateur|me connecter à mon compte|accéder à la page des listes
|utilisateur|accéder à mon profil|consulter mes informations
|utilisateur|pouvoir modifier mes infos persos|le mettre à jour
|utilisateur|me déconnecter de mon compte|fermer ma session
|utilisateur|pouvoir supprimer mon compte|ne plus faire partie des listes
|utilisateur|créer à une liste|ranger ses idées d’item
|utilisateur|accéder à une liste|visualiser
|utilisateur|modifier une liste|mettre à jour
|utilisateur|supprimer une liste|supprimer
|utilisateur|créer un item (en texte simple, en url)|l’ajouter à liste
|utilisateur|accéder à un item|visualiser
|utilisateur|modifier un item|mettre à jour
|utilisateur|supprimer un item|supprimer

## Rôles

- Product owner : Martin GS
- Scrum dev : Nicolas Bnz
- Lead dev back : Thomas P
- Git Mater : Nicolas Ber
