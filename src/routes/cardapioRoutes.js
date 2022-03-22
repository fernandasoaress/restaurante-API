const express = require('express')
const router = express.Router()
const CardapioControllers = require('../controllers/CardapioControllers.js')

// Rota que deve criar um novo cardápio
router.post('/create', CardapioControllers.criar)

// Rota que deve listar todos os pratos
router.get('/', CardapioControllers.mostrarTodos)

// Rota que deve listar um prato atráves do ID
router.get('/:id', CardapioControllers.mostrarId)

// Rota que atualizar um prato baseado em seu ID
router.patch('/:id', CardapioControllers.updateId)

// Rota que deve deletar um prato
router.delete('/:id', CardapioControllers.deleteId)

module.exports = router
