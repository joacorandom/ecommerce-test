const express = require('express');
const bodyParser = require('body-parser');
const { middleware } = require('common-errors');
const morgan = require('morgan');
require('dotenv').config();

const router = require('./src/config/routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware.crashProtector());
app.use(middleware.errorHandler);
app.use(morgan('combined'));

app.use(router);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
