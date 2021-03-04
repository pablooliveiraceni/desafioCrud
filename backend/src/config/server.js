const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

const port = 3333;

app.listen(port, () =>{
    console.log('localhost:' + port);
})

module.exports = app;