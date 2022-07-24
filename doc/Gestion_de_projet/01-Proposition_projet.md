#  Proposition du projet WishList (#25)

12/04/2021 - [https://github.com/O-clock-Quill/Projects/issues/25](https://github.com/O-clock-Quill/Projects/issues/25)

## Que voulez-vous faire ?

### Description

#### Intro

On a tous, dans nos favoris/marque-pages, des liens vers des objets qu'on a trouvés, qu'on voudrait acheter plus tard.

On a tous reçu un cadeaux d'anniversaire/Noël qu'on n'a jamais utilisé.

On est tous revenus d'un jour de shopping, après une journée de marche, de files d'attente, d'essayages, et s'est rendu compte qu'on a oublié quelque chose.

Sans oublier ces veilles de Noël (ou d'anniversaire) où on a essayé désespérément (et la plupart du temps sans succès) de trouver LE cadeau qui ferait plaisir à notre chéri.e/enfant/papa/maman/ami.e...

Ou les soirs où on revient du supermarché... sans le dentifrice, le sel ou le papier WC ! ^^

Et si on pouvait... :

- enregistrer les articles trouvés sur le net à un seul endroit ?
- partager cette liste avec nos proches et/ou amis ?
- créer une liste de mariage, de naissance ?
- créer une liste de courses (qui enregistre tous les articles déjà achetés pour pouvoir les réutiliser)
- avoir une liste d'articles à acheter qu'on rempli petit à petit (car on aime se faire plaisir de temps en temps... ou on espère le recevoir en cadeau. ;) )

... et ainsi éviter :

- les oublis
- les achats inutiles
- la dépense d'argent pour des objets dont on s'en servira jamais
- les situations embarrassantes (si, si ^^)
- les nerfs car le jour J est arrivé et on n'a rien trouvé
- les cadeaux "répétés" (qui n'a pas reçu 3 pulls pour le même anniversaire ? ^^)
- la perte du lien vers l'article/objet désiré/souhaité
- et (parce que c'est important !) plus on évite les achats inutiles, plus on protège la planète (emballages, colis, transport, déchets, etc) ;)

Alors, pour répondre à ces besoins, on pourrait imaginer une application qui permettrait la création et le partage de listes d'objets/souhaits. Listes qu'on pourrait :

- ou garder privées (une liste de choses à acheter, des souhaits, on en a tous)
- ou partager avec une personne
- ou partager avec un groupe de personnes

#### Éléments et données

##### Utilisateur-Liste-Item

- __utilisateur/liste__ :
  - un utilisateur peut créer une ou plusieurs listes
  - une liste peut appartenir à une ou plusieurs personnes (groupe)
- __une liste__ :
  - peut appartenir à une ou plusieurs catégories
  - peut être partagée
  - peut être commentée par les personnes y ayant accès
- __les items d'une liste__ :
  - peuvent être supprimés ou "cochés" par le proprietaire de la liste
  - peuvent être "cochés" par les "invité"
  - "doivent" avoir un titre
  - "pourraient" avoir une description, une image, un lien, une taille (vêtements), etc
  - en ajoutant un lien vers un article (sur le site marchant), afficher automatiquement le titre, l'image et le prix (je ne sais pas si c'est possible "à notre niuveau", mais je sais que certains sites fonctionnent comme ça)

##### Users

- __Visiteurs__
  - accéder à la page d'accueil
  - contacter l'administrateur
  - s’inscrire et se desinscrire
- __Utilisateurs__
  - se connecter et se déconnecter
  - modifier son profil (pseudo, image, commentaire)
  - afficher ses contacts
  - afficher les groupes dont il fait partie
  - créer/modifier/supprimer une liste (ou plusieurs)
  - créer/modifier/supprimer des items d'une liste
  - commenter une liste appartenant à un autre utilisateur
  - créer/modifier/supprimer un groupe
  - envoyer des invitations (groupes)
  - commenter une liste/item
- __Administrateurs__
  - administration des utilisateurs
  - administration des groupes

### Opportunités

Niveau __difficulté__, ce projet permettrait de travailler sur une application qui peut être __très simple__ (gestion d'utilisateurs, de listes et d'items)... __ou très complexe__, selon les éléments qu'on souhaiterait implémenter : listes, items, utilisateurs, groupes, liens externes, partage, validation, système d'échange de messages, chat, API externe...
Pour le __front__, pareil ! Il y a moyen de faire quelque chose de __simple et sobre__... ou quelque chose de __plus complet, complexe__
Pour le __back__, il va y avoir du travail : de la gestion des utilisateurs, aux listes et les items, et plus encore, (appel à des API externes ?)

## Quelles seront/pourraient être les technologies utilisées ?

__Front__ : React ! Je sais : je ne suis pas très original ^^
__Back__ : aux _backeux_ de voir ;0

## Avez-vous une idée de l'équipe qui conviendrait à ce projet ?

Cela dépendra des objectifs : si l'équipe part sur une application plutôt "simpliste", 3 personnes pourraient suffire. Cependant, si l'équipe souhaite implémenter des composants supplémentaires (messages, chat, APIs, etc), une quatrième personne serait nécessaire.

## 2 exemples d'utilisation

Voici **deux exemples** qui pourront donner une idée plus précise de l'utilisté d'une telle application, car lorsqu'on parle de _wishlist_, on a tendance a penser juste à une _liste de cadeaux_.

Chez nous on a crée 2 listes sur l'app **_Google Keep_**, qu'on a partagées avec la famille.

Dans la première liste, qu'on nommera **WishList** tout court  nous mettons :

- les articles qu'on trouve en magasin ou sur internet qui nous plaisent (avec les liens respectifs si possible)
MAIS aussi :
- les livres qu'on demande aux enfants à l'école,
- les vêtements de sports pour les activités
- les cordes pour la guitare de la petite qui devront bientôt être remplacées
- le pull qu'on a jeté à la poubelle car trop usé, et qu'on voudrait racheter
- les roues pour les rollers, qui commencent a s'user
- la yerba pour le maté (lorsqu'il ne reste qu'un kilo... oui, oui, on est de gros consommateurs ^^)
- ...

La deuxième liste (qu'on a nommé **Courses**) est beaucoup plus simple :
- on y ajoute les articles pour la maison à acheter au supermarché (des citrons pour faire un  lemon-pie le weekend, de l'essuie-tout  car il ne reste qu'un rouleau, le shampoing qui commence à se vider........)
- la liste à cocher permet de ne pas les supprimer. Alors, on n'a qu'à décocher un article lorsqu'il faut en racheter.
- Au marche du samedi, au au supermarché, on n'a qu'a lancer Google Keep pour voir les articles dont on a besoin, pour ne rien oublier !

Ces exemples sont là juste pour donner une idée des possibilités qu'une telle application pourrait proposer :
- liste-cadeau
- aide mémoire
- liste de courses
- liste de naissance/mariage
- liste pre-vacances
- etc etc etc
