const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/profile") {
    res.end("this is your profile");
  } else if (pathName === "/admin") {
    res.end("Hi admin");
  }
  res.end("Hi From Server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server created");
});
