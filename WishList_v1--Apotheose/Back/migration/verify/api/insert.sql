-- Verify wishlist:api/insert on pg

BEGIN;

SELECT * FROM new_user('{
    "pseudo": "Exemple",
    "mail":"exemple@exemple.com",
    "password": "exemple",
}'::json);

ROLLBACK;
