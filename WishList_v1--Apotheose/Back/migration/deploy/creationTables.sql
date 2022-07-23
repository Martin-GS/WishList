-- Deploy wishlist:creationTables to pg

BEGIN;

-- -----------------------------------------------------
-- Table `wishlist`.`User`
-- -----------------------------------------------------
CREATE TABLE "user" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "pseudo"  VARCHAR(45) NOT NULL UNIQUE,
    "email"  VARCHAR(45) NOT NULL UNIQUE,
    "password"  VARCHAR(255) NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz NOT NULL DEFAULT now() 
  );

-- -----------------------------------------------------
-- Table `wishlist`.`List`
-- -----------------------------------------------------
CREATE TABLE "list" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title"  VARCHAR(45) NOT NULL,
  "coment" VARCHAR(255) NULL,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now(),
  "user_id" int REFERENCES "user"(id) ON DELETE CASCADE
   );

-- -----------------------------------------------------
-- Table `wishlist`.`Item`
-- -----------------------------------------------------
CREATE TABLE "item" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title"  VARCHAR(45) NOT NULL,
    "url"  VARCHAR(255) NULL,
    "coment"  VARCHAR(255) NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz NOT NULL DEFAULT now(),
    "list_id" int REFERENCES list(id) ON DELETE CASCADE
    );

COMMIT;