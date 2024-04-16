# SQL and JavaScript together

It's good to have them together, but they can be still a little bit separate

```jsx
const selectAllAuthors = () => {
  const queryStr = `
      SELECT * FROM authors;
    `;
  const queryParams = [];

  return client.query(queryStr, queryParams).then((res) => res.rows);
};

const selectAuthorById = (authorId) => {
  const queryStr = `
      SELECT * 
      FROM authors 
      WHERE authors.id = $1
      ;
    `;
  const queryParams = [authorId];

  return client.query(queryStr, queryParams).then((res) => res.rows[0]);
};
```

# Easier way to manage big queries ?

```jsx
const selectAuthorById = (params) => {
  const { authorId, authorRating, authorAge } = params;

  const queryStr = `
      SELECT * 
      FROM authors 
      WHERE authors.id = $1
      AND authors.rating = $2
      AND author.age > $3
      ;
    `;
  const queryParams = [authorId, authorRating, authorAge];

  return client.query(queryStr, queryParams).then((res) => res.rows[0]);
};
```

# How to manage conditional conditions ?

Sometimes we have parameters that don't exist

```jsx
const selectAuthorById = (params) => {
  const { authorId, authorRating, authorAge } = params;

  const queryParams = [];

  const queryStr = `
      SELECT * 
      FROM authors
    `;

  if (authorId) {
    queryParams.push(authorId);
    queryStr += queryParams.length === 1 ? " WHERE " : " AND ";
    queryStr += `authors.id = $${queryParams.length}`;
  }

  if (authorRating) {
    queryParams.push(authorRating);
    queryStr += queryParams.length === 1 ? " WHERE " : " AND ";
    queryStr += `authors.rating > $${queryParams.length}`;
  }

  if (authorAge) {
    queryParams.push(authorAge);
    queryStr += queryParams.length === 1 ? " WHERE " : " AND ";
    queryStr += `authors.age < $${queryParams.length}`;
  }

  console.log(queryParams);

  return client.query(queryStr, queryParams).then((res) => res.rows[0]);
};
```

# How to manage positional values in an SQL query

It's fine to use backticks with the array length or the array index depending on what you want

```jsx
  $${queryParams.length}
```

# Why JS is slower than SQL

SQL: QUERIES (INSERT / READ / MANIPULATE / STUFF / THINGS / ELSE)
JS : EVERYTHING (Data manipulation, async code, fetch data, create interfaces, ...)

SQL: A lot of optimizations (C++ / C)
JS: An interpreted language

```sql
SELECT * FROM jokes LEFT JOIN authors ON authors.id = jokes.author_id
```

```jsx
  "SELECT * FROM jokes"

  "SELECT * FROM authors"


  jokes.map(joke => (...joke, ...authors[joke.author_id]))


  users.findAll.join("authors")
```

# Why the heck are we working with cents!

ROUNDING IS A NIGHTMARE!

INTEGERS > FLOATS

```jsx
// 1.991

const roundToCents = (amount) => {
  return Math.round(amount * 100) / 100;
};

const roundFromAndToCents = (amount) => {
  return Math.round(amount);
};

const humanized_money_with_symbol = (priceInCents) => {
  return `${priceInCents / 100}$`;
};
```

# Back works weirdly in the form ?!

# User insert approach

```jsx
const addUser = function (user) {
  return pool
    .query(
      `
    INSERT INTO users
    (name, email, password)
    VALUES 
    ($1, $2, $3)
    RETURNING *;`,
      [user.name, user.email, user.password]
    )
    .then((results) => {
      return results.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addUser = user => {
  const queryStr = `
  INSERT INTO users
    (name, email, password)
  VALUES 
    ($1, $2, $3)
  RETURNING *;
  `
  const queryParams = [user.name, user.email, user.password]

  pool.query(queryStr, queryParams).then(...)
}
```
