const express = require("express");
const cookieParser = require("cookie-parser");

const { thieves } = require("./data/thiefData");

const {
  authenticateThief,
  createThief,
  fetchThiefInfo,
} = require("./helpers/thiefHelpers");

const app = express();
const port = 8000;

app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); // Take a form string and convert it to an object
app.set("view engine", "ejs");

app.use((req, res, next) => {
  const { thief } = fetchThiefInfo(thieves, req.cookies.email);

  if (thief && req.url === "/register") {
    return res.redirect("/");
  }

  return next();
});

app.get("/", (req, res) => {
  const { email } = req.cookies;

  const { thief } = fetchThiefInfo(thieves, email);

  const templateVars = { thief: null, url: req.url };

  if (thief) {
    templateVars.thief = thief;
  }

  return res.render("index", templateVars);
});

// app.use("/register", registerRouter);

app.get("/register", (req, res) => {
  const templateVars = { thief: null, url: req.url };

  return res.render("register", templateVars);
});

app.post("/register", (req, res) => {
  const { error, thief } = createThief(thieves, req.body);

  if (error) {
    console.log(error);
    return res.redirect("/register");
  }

  res.cookie("email", thief.email);

  return res.redirect("/");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const { error, thief } = authenticateThief(thieves, email, password);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }

  res.cookie("email", thief.email);

  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("email");

  return res.redirect("/");
});

app.use((req, res, next) => {
  res.send("HEY THAT PAGE DOESNT EXISTS");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
