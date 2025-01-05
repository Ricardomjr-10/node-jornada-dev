import express from 'express'// importar o express
import conexao from '../infra/conexao.js' // importar conexao
const app = express()// criar uma instancia

app.use(express.json())// configurar o app para receber json-ler body com json

//nova rota, endpoint
app.get('/selecoes', (req, res) => {
    const sql = 'SELECT * FROM selecoes'
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

//rota get por id
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM selecoes WHERE id = ?'
    conexao.query(sql, id, (erro, resultado) => {
        const linha = resultado[0]
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(linha)
        }

    })
})

//rota post -postar dados
app.post('/selecoes', (req, res) => {
    const selecao = req.body
    const sql = 'INSERT INTO selecoes SET ?' // ? CONJUNTO DE DADOS QUE VAI SER INSERIDO
    conexao.query(sql, selecao, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(201).json(resultado)
        }
    })
})

// rota para apagar dados
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = 'DELETE FROM selecoes WHERE id = ?'
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

//rota de atualizacao de dados - alterar dados
app.put('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const selecao = req.body
    const sql = 'UPDATE selecoes SET ? WHERE id = ?'
    conexao.query(sql, [selecao, id], (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

//exportar o app
export default app