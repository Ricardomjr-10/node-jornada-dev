import express from 'express'// importar o express
import SelecaoController from './app/controllers/SelecaoController.js'
const app = express()// criar uma instancia

app.use(express.json())// configurar o app para receber json-ler body com json

//exportar o app
export default app