import conexao from "../database/conexao.js"
import SelecaoRepository from "../repositories/SelecaoRepository.js"
class SelecaoController {

    async index(req, res) { // async - codigo assincrono com promises
        const row = await SelecaoRepository.findAll()//await - aguardar a reposta
        res.json(row)
    } // listar tudo
    async show(req, res) {
        const id = req.params.id
       const row = await SelecaoRepository.findById(id)
       res.json(row)
    } // listar por id
    async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.json(row)
        
    } // criar dados
    async update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const row = await SelecaoRepository.update(id, selecao)
        res.json(row)
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