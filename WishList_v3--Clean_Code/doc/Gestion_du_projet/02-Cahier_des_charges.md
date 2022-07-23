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

### Liste des technololgies utilisées pour le projet (spécifications techniques)

- Front: react, redux à voir, threeJS?
- Back: Node, express, joy, sqitch

### Navigateurs compatibles

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