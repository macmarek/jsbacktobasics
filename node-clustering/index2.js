const cluster = require("cluster");

// Is the file executed in master mode ?
if (cluster.isMaster) {
  // Cause index.js to be executed again in child mode
  console.log("master started");
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  // Child, execute server code
  console.log("child started");
  const express = require("express");
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get("/", (req, res) => {
    doWork(5000);
    res.send("Hi there");
  });

  app.get("/fast", (req, res) => {
    res.send("this was fast");
  });

  app.listen(3000);
  console.log("server started");
}
