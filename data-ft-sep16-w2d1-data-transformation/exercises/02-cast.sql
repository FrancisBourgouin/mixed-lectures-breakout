-- Convert the release year string to a date

SELECT year, CAST(year || '-01-01' AS DATE) AS proper_date FROM games LIMIT 10;

-- Using CAST in condition for dates

SELECT year FROM games WHERE CAST(year || '-01-01' AS DATE) BETWEEN '2005-01-01' AND '2010-01-01' LIMIT 10;
 

-- Using CAST to convert sale numbers

SELECT name, CAST(global_sales * 1000000 AS INT) AS global_sale_units FROM games ORDER BY global_sale_units LIMIT 10;

-- Using CAST to convert sales to % of total sales for all games

SELECT 
name, 
CAST(global_sales / (SELECT SUM(global_sales) FROM games) * 100 AS FLOAT) AS sale_percentage 
FROM games
WHERE year = 2004
ORDER BY CAST(global_sales / (SELECT SUM(global_sales) FROM games) * 100 AS FLOAT) DESC;