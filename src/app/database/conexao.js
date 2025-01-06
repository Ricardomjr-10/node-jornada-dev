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

//jsdoc
/**
 * Exexuta um codigo sql com ou sem valores
 * @param {string} sql instrucao sql a ser executada
 * @param {string=id | [selecao, id]} valores // valores a serem passados para o sql
 * @param {*} mensagemReject 
 * @returns 
 */
const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, selecao, (erro, resultado) => {
            if (erro) return reject('Não foi possível cadastrar')
            //fazer o parse dos resultados
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default conexao