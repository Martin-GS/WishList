-- Deploy wishlist:alterTableItemImg to pg

BEGIN;

ALTER TABLE "item" ADD "image_url" VARCHAR(255) NULL;

COMMIT;
