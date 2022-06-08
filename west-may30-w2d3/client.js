const net = require("net");

const client = net.createConnection({ host: "localhost", port: 1337 }, () => {
  client.setEncoding("utf-8");
  client.write("Hello server!");
});

client.on("data", (data) => {
  console.log(data);
});

// Readline
