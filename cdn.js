const express = require('express');

const app = express();
const port = 8080;

app.use(express.static('assets'));

app.listen(port);

console.log('CDN listening on localhost:' + port);