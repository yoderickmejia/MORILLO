require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3001;
const cors = require('cors');
const path = require('path');
//const Auth = require('./auth');

app.listen(
    port, () => {
        console.log(`Listening on http://localhost:${port}`);
    }
);

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
//app.use(Auth);
app.use(express.urlencoded({ extended: true }));


app.use(express.json());

app.get('/api/v1', (req, res) => {
    
});

const Product = [
    {Id_Evento: 1, Imagenes: "https://a.png", Nombre: "nombre 1", }
]

app.get('api', (req, res) => {
    res.send("project api")
})

const routes = require('./routes/routes.js');
app.use('/api/events', routes);