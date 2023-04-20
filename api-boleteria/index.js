require('dotenv').config();
const express = require('express');
const port = process.env.port || 80;
const bodyParser = require('body-parser');
const { dbService } = require('./services/dbService');

const app = express();

app.use(bodyParser.json());

require('./routes')(app, dbService());

app.listen(port, () => {
    console.log("app listening on port " + port)
})