const express = require('express');
const app = express();

// const db = require('./models/db'); 

app.get('/list', (req, res) => {
    res.send("Finance Extract")
})

app.listen(8081, () => {
    console.log("Sevidor iniciado na porta 8081")
});