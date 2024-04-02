-- Fetch Data
-- Insert Data
-- Delete Data
-- Modify Data

-- Answer to the ultimate question of the universe: 42, ASCII code for * (42)

SELECT * FROM authors;


-- write the column name
-- write the table name . column name

-- const someObj = {a:1} => someObj.a or someObj["a"]
SELECT 
  id, name AS best_joke_author, authors.description 
FROM authors
;


SELECT * FROM jokes WHERE rating > 4 AND author_id IS NOT NULL;

SELECT * FROM jokes WHERE question LIKE 'What%';

-- SELECT * FROM jokes WHERE LEFT(question,4) LIKE "What";

SELECT * FROM jokes WHERE question LIKE '% a %';   


SELECT * FROM jokes WHERE LOWER(question) LIKE 'what%'; -- SQL is case sensitive by default
SELECT * FROM jokes WHERE question ILIKE 'What%'; -- PGSQL exclusive

SELECT * FROM jokes ORDER BY rating;
SELECT * FROM jokes ORDER BY rating ASC;

SELECT * FROM jokes ORDER BY rating DESC;


SELECT * FROM jokes ORDER BY rating DESC LIMIT 1;

SELECT * FROM jokes ORDER BY rating DESC LIMIT 1 OFFSET 1;

-- Joining tables together
-- 1. The two tables
-- 2. The pivot point

SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id;

SELECT * FROM jokes LEFT JOIN authors ON authors.id = jokes.author_id;
SELECT * FROM authors RIGHT JOIN jokes ON authors.id = jokes.author_id;

SELECT * FROM jokes RIGHT JOIN authors ON authors.id = jokes.author_id;

SELECT * FROM jokes FULL OUTER JOIN authors ON authors.id = jokes.author_id;



SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id;

-- SQL with JS 
-- Results will be an array of objects by default
-- row = {id, question, answer, rating, author_id, id, name, funny, description} 

SELECT
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_funny,
  authors.description AS author_description
FROM jokes 
JOIN authors ON authors.id = jokes.author_id;


-- SQL Views (Read only table)

-- CREATE VIEW jokes_with_authors AS (
--   SELECT
--     jokes.*,
--     authors.name AS author_name,
--     authors.funny AS author_funny,
--     authors.description AS author_description
--   FROM jokes 
--   JOIN authors ON authors.id = jokes.author_id
-- );


-- AGGREGATE FUNCTIONS IN SQL

SELECT COUNT(*) AS joke_count, COUNT(author_id) AS joke_with_author_count FROM jokes;


SELECT AVG(rating) FROM jokes WHERE id != 4 ;


SELECT author_id, AVG(rating) 
FROM jokes 
WHERE author_id IS NOT NULL 
GROUP BY author_id 
ORDER BY author_id
;


-- SHOW ALL THE JOKES THAT ARE OVER THE AVERAGE
-- FUNKY SQL TIME!

SELECT * 
FROM jokes 
WHERE rating > (SELECT AVG(rating) FROM jokes WHERE id != 4);


-- WHERE .. IN operator


SELECT * 
FROM authors 
WHERE id IN (
  SELECT author_id
  FROM jokes 
  WHERE 
    rating > (SELECT AVG(rating) FROM jokes WHERE id != 4)
);


SELECT MIN(rating) FROM jokes WHERE;