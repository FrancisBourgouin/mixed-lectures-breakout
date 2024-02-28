// Net package vs HTTP package

const http = require("http");
const fs = require("fs");

// Persistent connection
// Requests & Responses

// Browser sends a request
// Server send back a response

// Server sends a request
// Server send back a response

const someHTML = `
<h1>I AM TITLE!</h1>
<h2>I AM SUBTITLE </h2>
`;

const server = http.createServer((req, res) => {
  console.log(req);

  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./someFile.html", (err, data) => {
    res.end(data);
  });
});

server.listen(9001);

// Request & Responses == Fax

// Status Code

// 1xx
// 2xx : 200 OK 201 Created
// 3xx : 301/302 Redirect google.com => google.ca
// 4xx : 404 Page not found
// 5xx : Internal Server Error

// 2xx : Everything is good
// 3xx : Wrong place, but I'll redirect you
// 4xx : We did something wrong (client)
// 5xx : Server fudged up for some reason
