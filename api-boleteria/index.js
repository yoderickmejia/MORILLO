require('dotenv').config();
const express = require('express');
const port = process.env.port || 80;
const bodyParser = require('body-parser');
const { dbService } = require('./services/dbService');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
    });

app.use(bodyParser.json());

require('./routes')(app, dbService());

app.listen(port, () => {
    console.log("app listening on port " + port)
})