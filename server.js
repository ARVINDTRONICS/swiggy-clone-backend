const express = require("express");
const app = express();
const { port, environment } = require("./config/config");

console.log(environment);
//Header and core
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (request, response) => {
  response.send("Hello from Server!");
});

app.listen(app.get("PORT"), () => {
  console.log(`app listening on port:${port}`);
});

module.exports = app;
