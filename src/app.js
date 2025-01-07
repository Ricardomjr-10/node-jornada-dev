import express from 'express'// importar o express
import routes from './routes.js'

const app = express()// criar uma instancia

app.use(express.json())// configurar o app para receber json-ler body com json

//usar o routers
app.use(routes)

//exportar o app
export default app