# Cahier des charges

## 1. Le projet

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

## 2. Fonctionnalités

### Le MVP (Minimum Viable Product)

- Accès au compte
- Gestion des listes
- Gestion des items (édition unitaire)
- Gestion des types d’item
  - Transformation de l’url
- Accéder aux mentions légales
- Accéder à la page de contact

### Évolutions potentielles

- Gestion du profil utilisateur
  - édition du compte
- Gestion des items
  - Édition multiple
- Gestion des types d’item
  - Texte simple
  - Prendre une photo
- Activation/désactivation des items
- Barre de recherche
- Gestion des catégories/ tag
  - Catégorie: thème/personne/date non éditables
  - Tag éditables
- Gestion des favoris
- Archivage
- Partager avec son entourage
  - interne à l’app
  - plus vaste (RS, email…)
- Ajouter des pub pour monétiser
- Extension pour navigateur
- Création d’une cagnotte de personnes externes
- Mise en place d’une messagerie d’échange entre admin et utilisateur

## 3. Technos

### API/Back (v1)

- Node
- express
- joy
- sqitch

### Client/Front (v3)

- [HTML](https://www.w3.org/html/) + [CSS](https://www.w3.org/Style/CSS/) / [SCSS (Sass)](https://sass-lang.com/) + [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript) / [JSX](https://fr.reactjs.org/docs/introducing-jsx.html)
- [React](https://reactjs.org/) (bibliothèque JavaScript)
- [ReactDOM](https://fr.reactjs.org/docs/react-dom.html) (injection des composants React dans le DOM)
- [prop-types](https://github.com/facebook/prop-types) (validation de props au sein du JSX)
- [React-Router](https://reactrouter.com/) (bibliothèque de routage (routing) standard)
- [Create-React-Model](https://create-react-app.dev/) (modèle React)
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

## 4. Navigateurs compatibles

Application **Mobile first** avec compatibilité desktop.

## 5. Arborescence et Routes

cf [03-Arborescence_et_routes.pdf](./03-Arborescence_et_routes.pdf)

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

## 6. User stories

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

## 7. Rôles

- Product owner : [Martin GS](https://github.com/Martin-GS)
- Scrum dev : [Nicolas Bzn](https://github.com/NicolasBNZ)
- Lead dev back : [Thomas P](https://github.com/gibsonshelby)
- Git Mater : [Nicolas Brnrd](https://github.com/Nicolas-B06)
