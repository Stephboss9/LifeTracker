CREATE TABLE users (
id                SERIAL PRIMARY KEY,
username          TEXT NOT NULL,
password          TEXT NOT NULL,
first_name        TEXT NOT NULL,
last_name         TEXT NOT NULL,
email             TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
created_at        TEXT NOT NULL,
updated_at        TEXT NOT NULL
);

CREATE TABLE nutrition (
id                SERIAL PRIMARY KEY,
name              TEXT NOT NULL,
category          TEXT NOT NULL,
calories          INT NOT NULL,
image_url         TEXT NOT NULL,
user_id           INT NOT NULL,
created_at        TEXT NOT NULL
);