// HTTP Server w/ Routing

const http = require("http");

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

// /users/1 => Pequeno Pollo
// /users/2 => Irish Cobbler
// anything else => :(

// /users/new

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   res.writeHead(200, { "Content-Type": "application/json" });

//   if (req.url === "/users/1") {
//     const data = JSON.stringify(users[1]);
//     return res.end(data);
//   }

//   if (req.url === "/users/2") {
//     const data = JSON.stringify(users[2]);
//     return res.end(data);
//   }

//   res.writeHead(404, { "Content-Type": "text/html" });
//   return res.end("PAGE NOT FOUND");
// });

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.writeHead(200, { "Content-Type": "application/json" });

  const splitUrl = req.url.split("/");

  if (splitUrl[1] === "users") {
    const userId = Number(splitUrl[2]);
    const data = JSON.stringify(users[userId]);
    return res.end(data);
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  return res.end("PAGE NOT FOUND");
});

server.listen(9001);
