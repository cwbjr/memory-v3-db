const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const games = require('./routes/games');

app.use(bodyParser.json());
app.use('/games', games);

// 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((req, res, next, err) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err.stack : {}
  });
});

module.exports = app;
