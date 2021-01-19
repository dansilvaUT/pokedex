create table pokemon_users (
    user_id serial PRIMARY KEY,
    username VARCHAR(200),
    email VARCHAR(200),
    password VARCHAR(500)
)
