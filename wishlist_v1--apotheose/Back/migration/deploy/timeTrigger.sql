-- Deploy wishlist:timeTrigger to pg

BEGIN;

CREATE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp 
BEFORE UPDATE ON "user" 
FOR EACH ROW 
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE
UPDATE ON "list"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE
UPDATE ON "item"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;
