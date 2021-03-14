const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({ title: 'Como criar API:'})
    //res.send('Introdução a API')
})

app.listen(3000, () => {
    console.log("O servidor está rodando corretamente na porta 3000: http://localhost:3000")
})