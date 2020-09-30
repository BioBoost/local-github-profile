const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const config = require("./config.js");
const cors = require('cors');

// Create Express App
const app = express();

// Cross-Origin Resource Sharing
app.use(cors());    // Allow-all

// Handle JSON body - utf8 encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Some basic routes
app.get("/", (req, res) => {
  res.send({msg: 'Welcome to GitHub local API'});
});

app.get("/users/:un", (req, res) => {
  const username = req.params.un.toLowerCase();
  console.log(`Fetching user resource with username = ${username}`);
  const filename = `${config.DATAPATH}/users/${username}.json`;

  if (!fs.existsSync(filename)) {
    res.status(404).send({ error: 'User not found'});
  } else {
    fs.readFile(`${filename}`, "utf8", (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
  }
});

// Start listening for requests
console.log("Starting Local GitHub API");
const server = app.listen(config.PORT, () => {
  console.log(`Listening on port ${server.address().port}`);
});