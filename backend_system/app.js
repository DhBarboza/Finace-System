const express = require('express');
const app = express();
const Extract = require('./models/Extract');

// const db = require('./models/db'); 

app.get('/list', (req, res) => {
    res.send("Finance Extract")
});

app.post('/register', async (req, res) => {
    res.send("Cadastrar")
});


app.listen(8081, () => {
    console.log("Sevidor iniciado na porta 8081")
});