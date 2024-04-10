const client = require("./db-helpers");

const fetchAllAuthors = () => {
  const queryStr = `
  SELECT *
  FROM authors
  ;
  `

  return client.query(queryStr).then(dbRes => dbRes.rows)
}

const fetchAuthorById = (authorId) => {
  const queryStr = `
  SELECT *
  FROM authors
  WHERE authors.id = $1
  ;
  `;
  const queryParams = [authorId]

  return client.query(queryStr, queryParams).then((dbRes) => dbRes.rows[0]);
};

module.exports = {fetchAllAuthors, fetchAuthorById}