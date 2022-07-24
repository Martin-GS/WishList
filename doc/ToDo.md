# ToDo

- [ ] __Interface__ :
  - [ ] personnaliser et créer messages pour l'utilisateur : gestions des réponses "error" de l'API à prendre en compte pour afficher "le bon message" à l'utilisateur
  - [ ] Messages d'erreur en "modale/pop-up"
  - [ ] modale concernant les cookies lors de la première connexion
- [ ] __Tous les formulaires__ :
  - [ ] Mettre en place champs obligatoires + limite de caractères
  - [ ] Vider les formulaires une fois validés
- [ ] __Pages statiques__ :
  - [ ] ajouter lien LinkedIn, GitHub et Twitter dans la presentation de "la team"
  - [ ] corriger description de l'app dans À propos
  - [ ] remplacer le texte dans Mentions Légales
- [ ] __Création compte__ :
  - [ ] être redirigé vers la page d'accueil et être obligé de se connecter (pas de redirection directe)
  - [ ] ajouter une casse à cocher pour que l'utilisateur accepter les termes d'utilisation
- [ ] __Mail/contact__
  - [ ] configuration de l'adresse électronique d'administration et 
  - [ ] configuration du formulaire de contact sr l'app
- [ ] __Liste d'items__ : ajouter un fond et un thumbnail par défaut lorsque l'image de l'article importé ne fonctionne pas
- [ ] __Confirmation__ : Créer une modale de validation pour la validation d'une déconnexion/suppression/modification
- [ ] __PropTypes React__ : Valider les props des composants : prop-types
- [ ] __Composant Profile__ : coder les routes (Back). Front Ok

---

- [ ] __Responsivité et media query__ : Le client ayant été développé avec React + Bootstrap (v1), les __media querys__ utilisés pour la version 1 pour rendre l'application responsive ne sont plus nécessaires. Néanmoins, pour pouvoir montrer/expliquer au jury qu'on sait s'en servir (les coder "a la mano"), on a gardé une copie du fichier list.scss de la v1 (que vous trouverez dans ce dossier sous le nom list-v1.scss)
- [ ] __Formulaire de contact__ : formulaire mis en place mais non fonctionnel
- [ ] __Profile__ : page crée, mais recupération des données imposible (réponse serveur : error 500). Et cncernant la __modification du profil utilisateur__ : structure de base créée mais composant non fonctionnel (reponse serveur : error 500)
- [ ] __CRUD__ : création et suppression de listes et d'items OK (refresh des pages apres création/supression ENFIN ok !), modification pas encore fonctionnelle