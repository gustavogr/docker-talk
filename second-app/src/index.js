const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

const externalUri = process.env.EXTERNAL_URI;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/echo", async (req, res) => {
  try {
    const response = await fetch(externalUri);
    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
