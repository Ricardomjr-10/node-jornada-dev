import app from './src/app.js'//importar o app
import conexao from './infra/conexao.js'//importar a conexao
const PORT = 3000// define a porta

// conectar ao banco de dados
conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conectado realizada com sucesso')
        // escutar porta
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereco http://localhost:${PORT}`)
        })
    }
})
