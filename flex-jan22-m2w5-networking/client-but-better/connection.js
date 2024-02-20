const net = require("net");

const client = net.createConnection({ host: "127.0.0.1", port: 9001 });

client.setEncoding("utf-8");

const writeToServer = (data) => client.write(data);

module.exports = { writeToServer, client };
