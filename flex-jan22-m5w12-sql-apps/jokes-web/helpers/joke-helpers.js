const client = require("./db-helpers");

const insertJoke = (newJoke) => {
  const {question, answer, rating, author_id} = newJoke

  const queryStr = `
  INSERT INTO
    jokes (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
  ;
  `

  // INSERT 0 1

  const queryParams = [question, answer, rating, author_id]

  return client.query(queryStr, queryParams).then(dbRes => dbRes.rows[0])
}

const fetchAllJokes = () => {
  const queryStr = `
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.funny AS author_funny,
    authors.description AS author_description
  FROM jokes
  JOIN authors
  ON authors.id = jokes.author_id
  ;
  `

  return client.query(queryStr).then(dbRes => dbRes.rows)
}

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

module.exports = {fetchAllJokes, fetchJokeById, insertJoke}