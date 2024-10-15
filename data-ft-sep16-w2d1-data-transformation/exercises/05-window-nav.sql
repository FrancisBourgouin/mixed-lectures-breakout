-- FIRST_VALUE(), LAST_VALUE(), NTH_VALUE(), LEAD(), LAG() example

-- Show a platform's first and second best seller

SELECT 
  name,
  platform,
  FIRST_VALUE(name) OVER (PARTITION BY platform ORDER BY global_sales DESC) AS best_seller,
  NTH_VALUE(name, 2) OVER (PARTITION BY platform ORDER BY global_sales DESC) AS second_best
FROM
  games
WHERE platform LIKE 'GBA'
ORDER BY year DESC;


-- Show how much the previous game has sold

SELECT 
  name,
  platform,
  global_sales,
  LEAD(global_sales) OVER (PARTITION by platform ORDER BY global_sales ) - global_sales AS lead_sale_diff,
  LAG(global_sales) OVER (PARTITION by platform ORDER BY global_sales ) - global_sales AS lag_sale_diff
FROM
  games
WHERE platform LIKE 'GBA'
ORDER BY global_sales DESC;