const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.writeHead(201,{ "Content-Type": "text/html" });
  // res.write("<h1>This is a test server</h1>Hello");
  // res.end("This is response end");
  if (req.url == "/") {
    res.write("<h1>This is base Url</h1>");
    res.end();
  } else if (req.url == "/home") {
    res.write("<h1>This is home page</h1>");
    res.end();
  } else {
    res.write(
      "<h1>This is non-existing</h1><br><a href = '/'>Go back to base URL</a>"
    );
    res.end();
  }
});

// server.listen(7777);

module.exports = { server };
