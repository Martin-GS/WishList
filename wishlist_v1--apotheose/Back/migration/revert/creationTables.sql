-- Revert wishlist:creationTables from pg

BEGIN;

    DROP TABLE "item", "list", "user";

COMMIT;