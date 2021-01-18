const express = require('express');
const app = express();
const { petsRoutes } = require('./routes');

app.use('/pets', petsRoutes);

module.exports = app;