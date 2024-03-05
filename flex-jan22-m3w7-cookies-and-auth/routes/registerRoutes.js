const express = require("express");

const registerRouter = express.Router();

registerRouter.get("/", (req, res) => {
  const templateVars = { thief: null, url: req.url };

  return res.render("register", templateVars);
});

//
registerRouter.post("/", (req, res) => {
  const { error, thief } = createThief(thieves, req.body);

  if (error) {
    console.log(error);
    return res.redirect("/register");
  }

  res.cookie("email", thief.email);

  return res.redirect("/");
});

module.exports = registerRouter;
