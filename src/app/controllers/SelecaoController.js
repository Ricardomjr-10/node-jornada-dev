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
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)
    } // atualizar
    delete(req, res) {
        const id = req.params.id
        const row = SelecaoRepository.delete(id)
        res.json(row)
    } // deletar
}

//padrao Singleton
export default new SelecaoController()