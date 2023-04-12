const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://eslinker:love0502@softmania.oz3e0wc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/service", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
