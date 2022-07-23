BEGIN;

UPDATE list SET title = 'liste pour John' WHERE title = 'Liste Anniversaire Thom';

SELECT * FROM "list";

COMMIT;