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
 * @param {string=id | [selecao, id]} valores  valores a serem passados para o sql
 * @param {string} mensagemReject  mensagem a ser exibida
 * @returns retorna o objeto da promessa
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if (erro) return reject(mensagemReject)
            //fazer o parse dos resultados
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default conexao