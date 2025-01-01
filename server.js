import app from '.src/app.js'
const port = 3000// define a porta

// escutar porta
app.listen(port, () => {
    console.log(`Servvidor rodando no endereco http://localhost:${port}`)
})