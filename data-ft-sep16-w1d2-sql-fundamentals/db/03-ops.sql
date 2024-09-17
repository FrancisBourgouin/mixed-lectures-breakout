-- Basic SELECT

-- SELECT NOW()

-- camelCase
-- priceInCents

-- snake_case
-- price_in_cents

SELECT * FROM jokes;


-- Single WHERE clause (CONDITION)

SELECT * FROM jokes WHERE rating >= 4;


-- Multiple WHERE clauses

SELECT *
FROM jokes
WHERE rating >= 4
AND id > 5
AND author_id > 5;

SELECT *
FROM jokes
WHERE question ILIKE '%what %'
OR question ILIKE '%what'
-- WHERE question ILIKE 'what%'
;


-- Ordering results

SELECT *
FROM jokes
ORDER BY rating DESC
LIMIT 2
OFFSET 6;
-- ORDER BY rating ASC


-- Joining tables

-- Primary Key Main key of a row in a specific table (INT AUTO-INCREMENT, SERIAL)
-- Foreign Key Key of another row, it may be from another table, or the same table


SELECT * 
FROM jokes
JOIN authors
ON jokes.author_id = authors.id;


-- SELECT jokes.id, jokes.question, jokes.answer...
SELECT 
	jokes.*,
	authors.name AS author_name,
	authors.description AS author_description,
	authors.funny AS author_is_funny
FROM jokes
	FULL OUTER JOIN authors
-- LEFT JOIN authors
-- INNER JOIN authors
ON jokes.author_id = authors.id;

-- SELECT * FROM jokes;

-- DROP VIEW IF EXISTS cool_jokes;

-- CREATE VIEW cool_jokes AS (
-- 	SELECT 
-- 	jokes.*,
-- 	authors.name AS author_name,
-- 	authors.description AS author_description,
-- 	authors.funny AS author_is_funny
-- FROM jokes
-- LEFT JOIN authors
-- ON jokes.author_id = authors.id
-- WHERE rating >= 4
-- 	);

SELECT * FROM cool_jokes;


-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)


SELECT MIN(rating) FROM jokes;

SELECT 
	AVG(rating) AS avg_joke_rating,
	COUNT(rating) AS rating_amount,
	author_id
FROM jokes
WHERE author_id IS NOT NULL
GROUP BY author_id
HAVING AVG(rating) > 3
-- HAVING;


-- SHOW the jokes of authors having an average of 4 and more in their jokes



-- Views
-- Essentially a read-only table



-- HOW MANY JOKES WITHOUT AUTHORS