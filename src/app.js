import express from 'express'// importar o express

const app = express()// criar uma instancia


// mock de dados
const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'G' },
    { id: 2, selecao: 'Suiça', grupo: 'G' },
    { id: 3, selecao: 'Sérvia', grupo: 'G' },
    { id: 4, selecao: 'Camarões', grupo: 'G' }
]
// criar rota padrao ou raiz
app.get('/', (req, res) => {
    res.send('Curso de NodeJS')
})

//nova rota, endpoint
app.get('/selecoes', (req, res) => {
    res.send('Lista de seleções')//enviar uma resposta
})

//exportar o app
export default app