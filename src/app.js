const express = require('express')// importar o express
const app = express()// criar uma instancia
const port = 3000// define a porta

// criar rota padrao ou raiz
app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})