const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const postRouter = require('./routes/post')

const app = express();

app.use(bodyParser.json());

app.use('/post', postRouter);

app.use('/', (req, res, next) => {
    res.send('<h1>It works!!!!</h1>');
});

const server = http.createServer(app);

server.listen(3000);