-- Deploy wishlist:api/insert to pg

BEGIN;

-- Add all informations of the user inside user table
CREATE FUNCTION new_user(json) RETURNS "user" AS $$
	INSERT INTO "user" (pseudo, email, "password" )
	VALUES (
		$1->>'pseudo',
		$1->>'email',
		$1->>'password'	
	)
	RETURNING *;
$$ LANGUAGE sql;

-- Add all informations of a liste inside list table
CREATE FUNCTION new_list(json) RETURNS list AS $$
	INSERT INTO list (title,coment, "user_id" )
	VALUES (
		$1->>'title',
		$1->>'coment',
		($1->>'user_id')::int   
	)
	RETURNING *;
$$ LANGUAGE sql;

-- Add all informations of an item inside item table
CREATE FUNCTION new_item(json) RETURNS item AS $$
	INSERT INTO item (title, "url", coment, image_url, list_id)
	VALUES (
		$1->>'title',
        $1->>'url',
        $1->>'coment',
		$1->>'image_url',
		($1->>'list_id')::int   

	)
	RETURNING *;
$$ LANGUAGE sql;

COMMIT;
