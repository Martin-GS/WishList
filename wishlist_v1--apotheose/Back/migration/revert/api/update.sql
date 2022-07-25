-- Revert wishlist:api/update from pg

BEGIN;

DROP FUNCTION update_item(json);
DROP FUNCTION update_list(json);
DROP FUNCTION update_user(json);


<<<<<<< HEAD

COMMIT;
=======
COMMIT;
>>>>>>> 95d13398a5bf3fd87984fdb5006dd7816350ff34
