-- Revert wishlist:api/insert from pg

BEGIN;

DROP FUNCTION new_user(json);
DROP FUNCTION new_list(json);
DROP FUNCTION new_item(json);

COMMIT;
