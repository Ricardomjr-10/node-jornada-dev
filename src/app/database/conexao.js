import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'dba',
    password: '1234',
    database: 'bdcopa'
})
// conectar ao banco
conexao.connect()

export default conexao