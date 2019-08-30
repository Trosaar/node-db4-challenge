const express = require('express');
const helmet = require('helmet');

const RecipeRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
  res.send(`<h2>The Cake is a LIE!</h2>`)
});


module.exports = server;
