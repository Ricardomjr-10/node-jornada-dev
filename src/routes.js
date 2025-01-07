import { Router } from "express";

const router = Router()

//rotas
//nova rota, endpoint
router.app.get('/selecoes', SelecaoController.index)
//rota get por id
router.app.get('/selecoes/:id', SelecaoController.show)
//rota post -postar dados
router.app.post('/selecoes', SelecaoController.store)
//rota de atualizacao de dados - alterar dados
router.app.put('/selecoes/:id', SelecaoController.update)
// rota para apagar dados
router.app.delete('/selecoes/:id', SelecaoController.delete)
