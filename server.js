'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0'; //application accepts any port with this 

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/123', (req, res) => {
  res.send('Hello 123\n');
});

app.get('/listit', (req, res) => {
  res.send('list functions please\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
