DROP TABLE IF EXISTS jokes; 
DROP TABLE IF EXISTS authors;

CREATE TABLE authors(
    id SERIAL PRIMARY KEY, -- PRIMARY KEY
    name TEXT NOT NULL,
    funny BOOLEAN NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE jokes(
   id SERIAL PRIMARY KEY, -- PRIMARY KEY
   question TEXT NOT NULL,
   answer TEXT,
   rating FLOAT,
   author_id INT REFERENCES authors(id) ON DELETE CASCADE -- FOREIGN KEY
);
