-- Check if a game is either retro, old or recent

SELECT 
  name,
  CASE
    WHEN year < 1990 THEN 'retro'
    WHEN year < 2010 THEN 'old'
    ELSE 'recent'
  END AS game_age
FROM games
LIMIT 20;