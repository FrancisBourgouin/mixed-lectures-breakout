// Basic express server wo/ EJS

const express = require("express");
const fs = require("fs");

const server = express();

const users = {
  1: {
    id: 1,
    name: "Pequeno Pollo",
    email: "pock@pock.com",
  },
  2: {
    id: 2,
    name: "Irish Cobbler",
    email: "po@ta.to",
  },
};

// 100-200-300-400-500
// CRUD / BREAD
// Create Read Update Delete | Browse Read Edit Add Delete

const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>User info!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <header>
      <h1>Hello USER NAME</h1>
    </header>
    <main>
      <h1>This is your info:</h1>
      <ul>
        <li>Name:</li>
        <li>Email: ...</li>
      </ul>
    </main>
  </body>
</html>

`;

server.get("/", (req, res) => {
  return res.send("Welcome to the homepage!!!!!!!!!!");
});

server.get("/users/new", (req, res) => {
  const responseBody = `
  <form>
  <input />
  </form> 
  `;
  return res.send(responseBody);
});

server.get("/users/:user_id", (req, res) => {
  const userId = req.params.user_id;
  const currentUser = users[userId];

  return res.json();

  // res.send(htmlContent);
});

server.use((req, res) => {
  return res.send("PAGE NOT FOUND");
});
// server.get("/users/2", (req, res) => {
//   res.json(users[2]);
// });

server.listen(9001);
