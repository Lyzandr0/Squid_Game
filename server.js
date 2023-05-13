const express = require("express");
const server = express();
const nunjucks = require("nunjucks");

server.use(express.static("public"));

server.set("view engine", "html");

nunjucks.configure("./view", {
  express: server,
  autoescape: true,
  noCache: true
});

server.get("/", (req, res) => {
  res.render("index.html");
});

server.listen(3000, () => {
  console.log("http://localhost:3000/");
  console.log("server is working!");
});