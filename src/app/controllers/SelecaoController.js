class SelecaoController {

    index(req, res) {
        const sql = 'SELECT * FROM selecoes'
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(resultado)
            }
        })
    } // listar tudo
    show(req, res) {
        const id = req.params.id
        const sql = 'SELECT * FROM selecoes WHERE id = ?'
        conexao.query(sql, id, (erro, resultado) => {
            const linha = resultado[0]
            if (erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(linha)
            }
    
        })
    } // listar por id
    store(req, res) {
        const selecao = req.body
        const sql = 'INSERT INTO selecoes SET ?' // ? CONJUNTO DE DADOS QUE VAI SER INSERIDO
        conexao.query(sql, selecao, (erro, resultado) => {
            if (erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(201).json(resultado)
            }
        })
    } // criar dados
    update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const sql = 'UPDATE selecoes SET ? WHERE id = ?'
        conexao.query(sql, [selecao, id], (erro, resultado) => {
            if (erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(resultado)
            }
        })
    } // atualizar
    delete(req, res) {
        const id = req.params.id
        const sql = 'DELETE FROM selecoes WHERE id = ?'
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(resultado)
            }
        })
    } // deletar
}

//padrao Singleton
export default new SelecaoController()