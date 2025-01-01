import express from 'express'// importar o express

const app = express()// criar uma instancia


// criar rota padrao ou raiz
app.get('/', (req, res) => {
    res.send('Curso de NodeJS')
})
//exportar o app
export default app