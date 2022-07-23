# Weekend du vendredi 14 soir au dimanche 16 mai : List + createList
## Step-by-Step

- Vendredi 14 soir :
  - [x] __Branche createLists__
    - [x] Commit/push de la branche createLists avec le formulaire de création d'une liste mis en place (pas encore de fonctionnalités) pour que NicolasBNZ puisse avoir un aperçu de ce que j'ai fait jusue là
  - [x] __Branche list__
    - [x] création de la branche list dans mon local et pull du front (qui avait été crée par NicolasBNZ)
    - [x] Modification du fichier __listController__ (/back) : remplacement (ligne 28) de `[{...items}]` par `items` (pour que, lors de la création de une liste, les items soient "liés" directement à la liste et eviter, ainsi, un objet itermediaire qui nous empecherait d'aller chercher les datas de chaque item)
  - [x] Modification du composant __List__ et création d'un sous composant __Items__ dans lequel on fait une map des items
- Samedi 15 et Dimanche 16 :
  - [x] Remplissage de mon carnet de bord personnel (création de D15-weekend)
  - [x] Lecture du matin : lectures React-Tiny-Link et Semantic pour implementation
  - [x] __Branche list__
      - [x] __Composant Header__ : ajout d'un `<link>` au logo
      - [x] __Composant Lists__ : ajout des icons "revenir en arrière" et "ajouter une liste"
      - [x] __Composant Page__ : modification du fichier de style pour afficher "correctement" le top et le bottom de la page par rapport au Header et le Footer
      - [ ] __Composant List__ :
        - [x] __/Lists/index.js__ : ajout des liens/icons "revenir en arrière" et "ajouter une liste"
        - [x] ajout du bouton "ajouter un item"
        - [x] mise en place minimaliste (de base)
        - [x] Link preview modules :
          - [x] Tests React Tiny Link : Finalement non conseillé pour notre projet car, s'il n'y a pas d'URL, le module fait planter React.
          - [ ] Tests [React Link Preview](https://github.com/ashwamegh/react-link-preview) : intéressant... a l'air plus "modulaire"... je n'ai pas réussi à faire aprvenir les props au composant. À voir.
          - [ ] Test "se servir des URL" pour importer les datas dont on a besoin
        - [x] vérifier liens et intégration (Page, Lists, routes...)
        - [x] une fois tout terminé changer le lien vers l'API (car il envoie vers la fause DB)
        - [x] commit/push
