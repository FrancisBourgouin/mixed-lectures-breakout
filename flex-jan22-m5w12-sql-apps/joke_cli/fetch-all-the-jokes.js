// Fetch all jokes, show the question, answer, the author name

// Start from the result
// Start from the data

// const outputJoke = (id, question, answer, authorName, rating, ) => {
const outputJoke = (jokeObj) => {
  const { author_name, author_description, id, question, answer } = jokeObj;

  console.log(`⭐🌟🌟⭐🔥🔥🔥 JOKE ID #${id} ⭐🌟🌟⭐🔥🔥🔥`);
  console.log(`Q: ${question}`);
  console.log(`A: ${answer}`);
  console.log(`BY: ${author_name}, ${author_description}`);
  console.log(`⭐🌟🌟⭐🔥🔥🔥🥔🥔🥔🥔🥔🥔⭐🌟🌟⭐🔥🔥🔥\n`);
};

const outputAllTheJokes = (jokeList) => jokeList.forEach(outputJoke)

// const joke = {
//   id: 5,
//   question:"You know you should knock on your fridge door before opening it?",
//   answer:"There might be a salad dressing",
//   rating:5,
//   author_id:4,
//   author_name:"Grigor",
//   author_funny:true,
//   author_description:"A student in march29"
// }

// outputJoke(joke)

// require("pg") => CommonJS
// import * from "pg" => ES6 syntax EcmaScript

// import pg from "pg"
const pg = require("pg");

// Async / Await syntax

const client = new pg.Client({
  host: "localhost",
  user: "labber",
  password: "labber",
  port: "5432",
  database: "jokes_jan22",
});


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

client
  .connect()
  .then(fetchAllJokes)  
  .then(outputAllTheJokes)
  .catch(console.log);
