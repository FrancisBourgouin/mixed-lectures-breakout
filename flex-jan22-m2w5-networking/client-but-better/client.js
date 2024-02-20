const { terminal } = require("./inputs");
const { writeToServer, client } = require("./connection");

client.on("data", (data) => console.log(data));
terminal.on("line", writeToServer);
