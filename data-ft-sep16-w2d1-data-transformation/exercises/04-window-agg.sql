-- SUM(), AVG(), MIN(), MAX(), COUNT() example

-- Show the total sales as a column for every row

SELECT 
  name,
  platform,
  SUM(global_sales) OVER (PARTITION BY platform) AS platform_sales,
  global_sales,
  global_sales / SUM(global_sales) OVER (PARTITION BY platform) * 100 AS percentage_of_sales
FROM games
ORDER BY global_sales DESC
LIMIT 10;

-- Bottom/Top seller and average per platform as a column

SELECT 
  name,
  platform,
  MAX(global_sales) OVER (PARTITION BY platform) AS platform_top_seller,
  MIN(global_sales) OVER (PARTITION BY platform) AS platform_worst_seller,
  AVG(global_sales) OVER (PARTITION BY platform) AS platform_avg_sells,
  global_sales
FROM games
ORDER BY global_sales DESC
LIMIT 10;