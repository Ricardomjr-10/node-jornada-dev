import express from 'express'// importar o express

const app = express()// criar uma instancia

app.use(express.json())// configurar o app para receber json-ler body com json


//funcao para localizar selecoes por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

//funcao para buscar selecao pelo indice
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}



//nova rota, endpoint
app.get('/selecoes', (req, res) => {
    //res.status(200).send(selecoes)//enviar uma resposta
    const sql = 'SELECT * FROM selecoes'
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(404).json({'erro': erro})
        } else {
            res.status(200).json(resultado)
        }
    })
})

//rota get por id
app.get('/selecoes/:id', (req, res) => {
    //let index = req.params.id
    res.json(buscarSelecaoPorId(req.params.id))
})

//rota post -postar dados
app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)//corpo da requisicao - o conteudo
    res.status(201).send('Seleção cadastrada com sucesso')// codigo 201 - codego de criacao
})

// rota para apagar dados
app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)//req.params.id - capturar o id passado por paramentro
    selecoes.splice(index, 1)// cortar um item do array 
    res.send(`Seleçao com id ${req.params.id} excluida com sucesso`)
})

//rota de atualizacao de dados - alterar dados
app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao // req.body.selecao - buscar do corpo da requisicao o campo selecao
    selecoes[index].grupo   = req.body.grupo // req.body.grupo - buscar do corpo da requisicao o campo grupo
    res.json(selecoes)
})

//exportar o app
export default app