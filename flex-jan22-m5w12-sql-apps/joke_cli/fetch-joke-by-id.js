const pg = require("pg");

const client = new pg.Client({
  host: "localhost",
  user: "labber",
  password: "labber",
  port: "5432",
  database: "jokes_jan22",
});

const jokeId = process.argv[2]

const outputJoke = (jokeObj) => {
  const { author_name, author_description, id, question, answer } = jokeObj;

  console.log(`⭐🌟🌟⭐🔥🔥🔥 JOKE ID #${id} ⭐🌟🌟⭐🔥🔥🔥`);
  console.log(`Q: ${question}`);
  console.log(`A: ${answer}`);
  console.log(`BY: ${author_name}, ${author_description}`);
  console.log(`⭐🌟🌟⭐🔥🔥🔥🥔🥔🥔🥔🥔🥔⭐🌟🌟⭐🔥🔥🔥\n`);
};


const fetchJokeById = (jokeId) => {
  const queryStr = `
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.funny AS author_funny,
    authors.description AS author_description
  FROM jokes
  JOIN authors
  ON authors.id = jokes.author_id
  WHERE jokes.id = $1
  ;
  `;
  const queryParams = [jokeId]

  return client.query(queryStr, queryParams).then((dbRes) => dbRes.rows[0]);
};

client
  .connect()
  .then(() => fetchJokeById(jokeId))
  .then(outputJoke)
  .catch(console.log)
  .finally(() => client.end());


