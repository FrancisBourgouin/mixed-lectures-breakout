// Basic express server wo/ EJS

const express = require("express");
const fs = require("fs");

const server = express();

server.set("view engine", "ejs");

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

server.get("/", (req, res) => {
  return res.send("Welcome to the homepage!!!!!!!!!!");
});

server.get("/users", (req, res) => {
  const templateVars = { users };

  return res.render("users", templateVars);
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

  const templateVars = { user: currentUser };

  return res.render("user", templateVars);
});

server.use((req, res) => {
  return res.send("PAGE NOT FOUND");
});
// server.get("/users/2", (req, res) => {
//   res.json(users[2]);
// });

server.listen(9001);
