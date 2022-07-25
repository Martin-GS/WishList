-- Deploy wishlist:api/update to pg

BEGIN;
 --update informations of the user inside user table
CREATE FUNCTION update_user(json) RETURNS "user" AS $$
    UPDATE "user" 
    SET     
		    pseudo= $1->>'pseudo',
		    email = $1->>'email',
		    "password" = $1->>'password'

    WHERE id = ($1->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

-- update informations of a list inside list table
CREATE FUNCTION update_list(json) RETURNS "list" AS $$
    UPDATE "list" 
    SET 
	    title = $1->>'title',
	    coment = $1->>'coment'
	
    WHERE id = ($1->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

--update informations of items inside item table
CREATE FUNCTION update_item(json) RETURNS "item" AS $$
    UPDATE "item" 
    SET  
		    title = $1->>'title',
            url = $1->>'url',
            coment = $1->>'coment',
            image_url= $1->>'image_url'
	
     WHERE id = ($1->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

COMMIT;
