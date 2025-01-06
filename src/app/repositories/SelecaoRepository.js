import conexao from '../database/conexao.js'

class SelecaoRepository {
    //CRUD
    create() {
        const sql = 'INSERT INTO selecoes SET ?' // ? CONJUNTO DE DADOS QUE VAI SER INSERIDO
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (erro, resultado) => {
                if (erro) return reject('Não foi possível cadastrar')
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
    update(selecao, id) {
        const sql = 'UPDATE selecoes SET ? WHERE id = ?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (erro, resultado) => {
                if (erro) return reject('Não foi possível atualizar a seleção')
                //fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }
    delete(id) {
        const sql = 'DELETE FROM selecoes WHERE id = ?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) return reject('Não foi possível deletar a seleção')
                //fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }
}

export default new SelecaoRepository