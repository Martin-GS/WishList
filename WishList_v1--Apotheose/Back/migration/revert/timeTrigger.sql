-- Revert wishlist:timeTrigger from pg

BEGIN;

DROP TRIGGER set_timestamp on "item";
DROP TRIGGER set_timestamp on "list";
DROP TRIGGER set_timestamp on "user";

DROP function "trigger_set_timestamp";


COMMIT;
