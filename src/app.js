import express from 'express'// importar o express
import SelecaoController from './app/controllers/SelecaoController.js'
const app = express()// criar uma instancia

app.use(express.json())// configurar o app para receber json-ler body com json

//nova rota, endpoint
app.get('/selecoes', SelecaoController.index)
//rota get por id
app.get('/selecoes/:id', SelecaoController.show)
//rota post -postar dados
app.post('/selecoes', SelecaoController.store)
//rota de atualizacao de dados - alterar dados
app.put('/selecoes/:id', SelecaoController.update)
// rota para apagar dados
app.delete('/selecoes/:id', SelecaoController.delete)

//exportar o app
export default app