const express = require("express");

const server = express();
server.use(express.json());

let books = [
  {
    id: 1,
    title: "vader rules",
    year: 1975
  },
  {
    id: 2,
    title: "vader is the best boss ever",
    year: 1977
  },
  {
    id: 3,
    title: "vader is da man!",
    year: 1981
  }
];

server.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

const PORT = 5632;

server.listen(PORT, () => console.log(`\n server is listening on ${PORT} \n`));
