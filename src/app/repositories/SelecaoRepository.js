import conexao from '../database/conexao.js'

class SelecaoRepository {
    //CRUD
    create() {
        const sql = 'INSERT INTO selecoes SET ?' // ? CONJUNTO DE DADOS QUE VAI SER INSERIDO
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if (erro) return reject('Não foi possível criar a seleção')
                    //fazer o parse dos resultados
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
            })
        })
    }
    findAll() {
        const sql = 'SELECT * FROM selecoes'
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if (erro) return reject('Não foi possível listar as seleções')
                    //fazer o parse dos resultados
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
            })
        })
    }
    findById(id) {
        const sql = 'SELECT * FROM selecoes WHERE id = ?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) return reject('Não foi possível listar as seleções')
                    //fazer o parse dos resultados
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
            })
        })
    }
    update() {}
    delete() {}
}

export default new SelecaoRepository