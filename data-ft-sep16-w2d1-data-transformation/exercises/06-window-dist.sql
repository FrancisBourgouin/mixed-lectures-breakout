-- CUME_DIST(), NTILE() example

SELECT 
  name,
  platform,
  global_sales,
  MAX(global_sales) OVER (PARTITION BY platform) AS platform_top_seller,
  MIN(global_sales) OVER (PARTITION BY platform) AS platform_worst_seller,
  AVG(global_sales) OVER (PARTITION BY platform) AS platform_avg_sells,
  CUME_DIST() OVER (PARTITION BY platform ORDER BY global_sales DESC) AS cumulative_distribution,
  NTILE(10) OVER (PARTITION BY platform ORDER BY global_sales DESC) AS decile_distribution,
  NTILE(100) OVER (PARTITION BY platform ORDER BY global_sales DESC) AS percentile_distribution
FROM games
ORDER BY year DESC
LIMIT 50;