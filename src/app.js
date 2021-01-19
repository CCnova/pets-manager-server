const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { petsRoutes } = require('./routes');

app.use(bodyParser.json());

app.use('/pets', petsRoutes);

module.exports = app;