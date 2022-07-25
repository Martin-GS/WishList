BEGIN ;

--Insert fake data to "list"

INSERT INTO list (title, coment, "user_id") VALUES

('noël 2021','Tu vois, j''ai vraiment une grande mission car en vérité meuble de Provence, hein ?',1),
('Liste Anniversaire Thom','Même si on se ment, là on voit qu''on a beaucoup à travailler sur nous-mêmes car on vit dans une réalité qu''on a créée et que j''appelle illusion car l''aboutissement de l''instinct!',1),
('Liste de course','Tu vois, tu vois au passage qu''il n''y a rien de concret car entre penser et dire, il y a un monde de différence et je ne cherche pas ici à mettre un point ! Et tu as envie de le dire au monde entier, including yourself.',1),
('Liste soirée mardi soir','Ça sounds good, si vraiment tu veux te rappeler des souvenirs de ton perroquet, il faut toute la splendeur du aware et cette officialité peut vraiment retarder ce qui devrait devenir... C''est pour ça que j''ai fait des films avec des replicants.',2),
('Liste cadeau Papi','',2);

COMMIT;