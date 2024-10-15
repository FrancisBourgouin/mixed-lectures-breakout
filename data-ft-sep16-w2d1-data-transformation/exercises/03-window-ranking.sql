-- ROW_NUMBER(), RANK(), DENSE_RANK(), PERCENT_RANK() examples

-- (id, name, platform, year, genre, publisher, na_sales, eu_sales, jp_sales, other_sales, global_sales

-- Gives a row number per partitionned year

SELECT 
  name,
  platform,
  year,
  global_sales,
  ROW_NUMBER() OVER( PARTITION BY year ORDER BY global_sales DESC)
FROM
  games
WHERE year >= 1980 AND year < 1982;
-- LIMIT 10;

-- Ranking per global sale on a given year
-- Potential Gaps

SELECT 
  name,
  platform,
  year,
  global_sales,
  RANK() OVER( ORDER BY global_sales DESC),
  DENSE_RANK() OVER( ORDER BY global_sales DESC),
  PERCENT_RANK() OVER( ORDER BY global_sales DESC)
FROM
  games
WHERE year = 2001
ORDER BY global_sales DESC;


