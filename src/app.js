const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { 
  petsRoutes,
  userRoutes,
} = require('./routes');

app.use(bodyParser.json());

app.use('/pets', petsRoutes);
app.use('/user', userRoutes);

module.exports = app;