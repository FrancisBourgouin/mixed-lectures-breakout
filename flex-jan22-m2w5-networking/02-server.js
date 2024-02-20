// Chat server (client built-in (Telnet))

// Server - Client Relationship

// Customer (client) of the Waiter (server)
// Waiter (client) asks the Cook (server) for food

// Customer => Client of the waiter
// Waiter => Server of the customer
// Waiter => Client of the cook
// Cook => Server of the Waiter

// Client => Ask / Receive
// Server => Provide

// Single computer can be both? YES!
// Single computer also be multiple servers? YES!

// IP Address => 127.0.0.1 (localhost)
// Home Address

// Appartments #
// Ports =>
// HTTP: 80
// HTTPS: 443
// SSH: 22
// PosgtreSQL: 5432

// Airplay: 5000
// Python: 5000

// Dev: 8080 / 8001 / 3000 / 3001

// HOST:PORT
// ::1 IPv6
// 127.0.0.1:9001

const net = require("net");

const listOfConnections = [];
const addToTheList = (connection) => listOfConnections.push(connection);
// camelCase => appalachianCase

const thingsToDoWhenWeHaveAConnection = (connection) => {
  // A little bit of setup
  connection.setEncoding("utf-8");
  addToTheList(connection);

  const parrotBack = (data) => {
    console.log(data);
    connection.write(`🦜: ${data}`);
  };

  const broadcast = (data) => {
    for (const storedConn of listOfConnections) {
      if (connection !== storedConn) {
        storedConn.write(`📣: ${data}`);
      }
    }
  };

  // Let's do stuff

  console.log(
    "HEY SOMEBODY CONNECTED! WE HAVE THIS AMOUNT OF CONNECTIONS",
    listOfConnections.length
  );

  connection.write("Welcome to Costco, I love you.\n");

  // connection.on("data", parrotBack);
  connection.on("data", broadcast);
};

const server = net.createServer(thingsToDoWhenWeHaveAConnection);

server.listen(9001);
