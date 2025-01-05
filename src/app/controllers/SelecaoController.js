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
    show() {} // listar por id
    store() {} // criar dados
    update() {} // atualizar
    delete() {} // deletar
}

//padrao Singleton
export default new SelecaoController()