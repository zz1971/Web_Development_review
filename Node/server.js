///////////////////////////////////////Node - Section 1st/////////////////////////////////////////////

// const http = require("http");

// const server = http.createServer(function(req, res) {
//   console.log(`user visited ${req.url}`);
//   res.end("hello!");
// });

// console.log("listening on http://localhost:3000");
// server.listen(3000);


//////////////////////////////////////Node - Section 2. it runs correctly////////////////////////////////

// const express = require("express");

// const app = express();

// app.get("/", function(req, res) {
//   res.end("Welcome to my site!");
// });

// app.get("/complement", function(req, res) {
//   res.end("You look nice today");
// });

// app.listen(5500);
// console.log("listening on http://localhost:5500");

////////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const path = require("path");
const port = 5500,

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(port);
console.log("listening on http://localhost:5500");