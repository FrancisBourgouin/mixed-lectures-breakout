// const net = require("net");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const client = net.createConnection({ host: "127.0.0.1", port: 9001 });

client.setEncoding("utf-8");
client.on("data", (data) => console.log(data));

// setInterval(() => {
//   client.write("🐔🐔🐔🐔🐔🐔🐔🐔🔥🔥🔥🔥🔥");
// }, 1000);

rl.on("line", (line) => {
  client.write(line);
});
