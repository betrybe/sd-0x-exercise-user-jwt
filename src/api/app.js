const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const usersRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());
app.use('/users', usersRoutes);
app.use(errorHandler);

module.exports = app;
