const express = require("express");

const server = express();
server.use(express.json());

const PORT = 5632;

server.listen(PORT, () => console.log(`\n server is listening on ${PORT} \n`));
