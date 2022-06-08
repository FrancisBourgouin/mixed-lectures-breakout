const net = require("net");

const listOfConnections = [];

const server = net.createServer((connection) => {
  const parrot = (data) => {
    console.log(data);
    connection.write(`🦜: ${data}`);
  };
  const broadcast = (data) => {
    for (const client of listOfConnections) {
      client.write(`📣: ${data}`);
    }
  };
  const broadcastToEverybodyElse = (data) => {
    for (const client of listOfConnections) {
      if (connection !== client) {
        client.write(`📣: ${data}`);
      }
    }
  };

  // Executed when there is a new connection
  listOfConnections.push(connection);

  connection.setEncoding("utf-8");
  connection.write("Hello! \n");

  connection.on("data", broadcastToEverybodyElse);

  console.log("A new client came in", listOfConnections.length);
});

server.listen(1337, () => {
  console.log("Ready to receive messages");
});

// eqArrays

const someArray = [1, 2, 3];
const bobArray = someArray;
const someOtherArray = [1, 2, 3];

someArray === someOtherArray;
