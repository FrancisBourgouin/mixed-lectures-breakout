const net = require("net"); // Require (or import) the "net" package from Node

server = net.createServer((connection) => {
  connection.setEncoding("utf-8");
  connection.on("data", (data) => console.log(data));
});

server.listen(9001);
