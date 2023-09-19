-- Basic SELECT

SELECT * FROM jokes;

SELECT question, answer FROM jokes;

SELECT * FROM authors;

SELECT authors.name FROM authors;

-- Single WHERE clause

SELECT * FROM jokes;

SELECT * FROM jokes WHERE rating <= 4;

SELECT * FROM jokes WHERE question LIKE '% an %';

SELECT * FROM jokes WHERE LOWER(question) LIKE '%w%'; -- ALL SQL FRIENDLY

SELECT * FROM jokes WHERE question ILIKE '%w%'; -- POSTGRESQL EXCLUSIVE

-- Multiple WHERE clauses

SELECT * 
FROM jokes 
WHERE 
  question ILIKE '%w%' 
  OR rating >= 4 
  AND author_id > 5
;

-- Ordering results

SELECT * FROM jokes ORDER BY question; -- ASC is by default

SELECT * FROM jokes ORDER BY question DESC;

SELECT * FROM jokes WHERE rating > 4 ORDER BY question;

-- Joining tables

SELECT 
  jokes.*,
  authors.name,
  authors.description,
  authors.funny
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
;

SELECT *, jokes.id AS joke_id
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
;

SELECT *, jokes.id AS joke_id
FROM jokes
LEFT JOIN authors
ON authors.id = jokes.author_id
;


SELECT *, jokes.id AS joke_id
FROM jokes
FULL OUTER JOIN authors
ON authors.id = jokes.author_id
;


-- SELECT *
-- FROM authors
-- RIGHT JOIN jokes
-- ;

-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)

SELECT COUNT(author_id) AS jokes_with_authors FROM jokes;

SELECT AVG(rating), author_id FROM jokes GROUP BY author_id;

SELECT author_id FROM jokes GROUP BY author_id HAVING AVG(rating) > 4;


-- Show the jokes of authors having an average of 4 and more in their jokes

SELECT * FROM jokes WHERE author_id IN (9,3,4,2,7,12);



-- Nested selects

SELECT 
  jokes.*,
  authors.name,
  authors.description 
FROM jokes 
JOIN authors
ON authors.id = jokes.author_id
WHERE author_id 
IN (
  SELECT author_id 
  FROM jokes 
  GROUP BY author_id 
  HAVING AVG(rating) > 4
);


-- Views (stretch)

-- View is a readonly 'table'
DROP VIEW IF EXISTS jokes_from_cool_authors;
DROP VIEW IF EXISTS jokes_with_authors;

CREATE VIEW jokes_with_authors AS SELECT 
  jokes.*,
  authors.name,
  authors.description,
  authors.funny
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
;

CREATE VIEW jokes_from_cool_authors AS SELECT *
FROM jokes_with_authors
WHERE author_id
IN (
  SELECT author_id 
  FROM jokes 
  GROUP BY author_id 
  HAVING AVG(rating) > 4
)