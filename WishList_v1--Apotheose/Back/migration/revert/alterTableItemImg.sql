-- Revert wishlist:alterTableItemImg from pg

BEGIN;

ALTER TABLE "item" DROP COLUMN "image_url";

COMMIT;
