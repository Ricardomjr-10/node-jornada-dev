import app from './app.js'//importar o app

const PORT = process.env.PORT || 3000// define a porta ou uma constante node


// escutar porta
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereco http://localhost:${PORT}`)
})