import app from './src/app.js'//importar o app
const PORT = 3000// define a porta

// escutar porta
app.listen(PORT, () => {
    console.log(`Servvidor rodando no endereco http://localhost:${PORT}`)
})