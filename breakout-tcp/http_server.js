const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === "/users/potato" && req.method === "GET") {
    return res.end(
      JSON.stringify({
        name: "Petit Poulet",
        username: "Super potato",
      })
    );
  }

  if (req.url === "/users/ninja" && req.method === "GET") {
    return res.end(
      JSON.stringify({
        name: "Mutant Ninja Turtle",
        username: "I DONT LIKE KRANG",
      })
    );
  }

  return res.end(
    JSON.stringify({
      data: "Hello!",
    })
  );
});

server.listen(8000, () => {
  console.log("server listening");
});
