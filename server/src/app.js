require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const version = process.env.VERSION || '0.1.0'; // TODO: should this pull from package.json?

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
    ts: new Date().toISOString(),
    version,
  });
});

app.listen(port, () => {
  console.log(`Listening on PORT=${port}`);
});
