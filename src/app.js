import express from 'express'// importar o express

const app = express()// criar uma instancia

app.use(express.json())// configurar o app para receber json-ler body com json

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
    res.status(200).send(selecoes)//enviar uma resposta
})


//rota post -postar dados
app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)//corpo da requisicao - o conteudo
    res.status(201).send('Seleção cadastrada com sucesso')// codigo 201 - codego de criacao
})


//exportar o app
export default app