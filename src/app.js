import express from 'express'// importar o express
import routes from './routes.js'

const app = express()// criar uma instancia

//usar o routers
app.use(routes)

app.use(express.json())// configurar o app para receber json-ler body com json

//exportar o app
export default app