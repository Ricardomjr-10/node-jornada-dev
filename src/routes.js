import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const router = Router()

//rotas
//nova rota, endpoint
router.get('/selecoes', SelecaoController.index)
//rota get por id
router.get('/selecoes/:id', SelecaoController.show)
//rota post -postar dados
router.post('/selecoes', SelecaoController.store)
//rota de atualizacao de dados - alterar dados
router.put('/selecoes/:id', SelecaoController.update)
// rota para apagar dados
router.delete('/selecoes/:id', SelecaoController.delete)

export default router