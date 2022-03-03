const net = require("net"); // Storing the net library in the net variable

const handleNewConnection = (connection) => {
  // 'connection' listener.
  connection.on("end", () => {
    console.log("client disconnected");
  });
  connection.on("data", (data) => {
    console.log("client wrote something", data);
  });
  console.log("client connected");
  connection.write("hello\r\n");
  connection.pipe(connection);
};

const server = net.createServer(handleNewConnection);

server.on("error", (err) => {
  throw err;
});

server.listen(8124, () => {
  console.log("server bound");
});
