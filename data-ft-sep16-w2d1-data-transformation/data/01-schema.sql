DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS publishers;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS platforms;


-- CREATE TABLE publishers(
--   id SERIAL PRIMARY KEY,
--   name TEXT
-- );

-- CREATE TABLE genres(
--   id SERIAL PRIMARY KEY,
--   name TEXT
-- );

-- CREATE TABLE platforms(
--   id SERIAL PRIMARY KEY,
--   acronym TEXT,
--   name TEXT
-- );

-- CREATE TABLE games (
--   id SERIAL PRIMARY KEY,  
--   name TEXT,
--   platform_id INT REFERENCES platforms(id) ON DELETE CASCADE,
--   year INT,
--   genre_id INT REFERENCES genres(id) ON DELETE CASCADE,
--   publisher TEXT,
--   na_sales FLOAT,
--   eu_sales FLOAT,
--   jp_sales FLOAT,
--   other_sales FLOAT,
--   global_sales FLOAT
-- );

CREATE TABLE games (
  id SERIAL PRIMARY KEY,  
  rank INT,
  name TEXT,
  platform TEXT,
  year INT,
  genre TEXT,
  publisher TEXT,
  na_sales FLOAT,
  eu_sales FLOAT,
  jp_sales FLOAT,
  other_sales FLOAT,
  global_sales FLOAT
);
