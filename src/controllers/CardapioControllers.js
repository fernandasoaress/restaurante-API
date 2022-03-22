const CardapioModels = require('../models/CardapioModels.js')

class CardapioControllers {
  static async criar(req, res) {
    const { entrada, pratoPrincipal, sobremesa, bebida } = req.body
    if (!entrada || !pratoPrincipal || !sobremesa || !bebida) {
      return res.status(401).json({ mensagem: 'Preencha todos os campos!' })
    }
    const novoCardapio = {
      entrada: entrada,
      pratoPrincipal: pratoPrincipal,
      sobremesa: sobremesa,
      bebida: bebida
    }
    try {
      await CardapioModels.create(novoCardapio)
      res.status(201).json({ mensagem: 'Cardápio criado com sucesso!' })
    } catch (error) {
      return res.status(401).json({ mensagem: error.message })
    }
  }
  static async mostrarTodos(req, res) {
    try {
      const cardapio = await CardapioModels.findAll()
      res.status(201).json({ resultado: cardapio })
    } catch (error) {
      return res.status(401).json({ mensagem: error.message })
    }
  }
  static async mostrarId(req, res) {
    const { id } = req.params
    try {
      const cardapio = await CardapioModels.findByPk(id)

      if (!cardapio) {
        return res.status(401).json({ mensagem: 'Cardápio não encontrado!' })
      }
      return res.status(200).json({ cardapio: cardapio })
    } catch (error) {
      return res.status(401).json({ mensagem: error.message })
    }
  }
  static async updateId(req, res) {
    const { id } = req.params
    const { entrada, pratoPrincipal, sobremesa, bebida } = req.body

    const cardapio = await CardapioModels.findByPk(id, { raw: true })

    if (!cardapio) {
      return res.status(401).json({ mensagem: 'Cardápio não encontrado!' })
    }
    const novosDados = {
      entrada: entrada,
      pratoPrincipal: pratoPrincipal,
      sobremesa: sobremesa,
      bebida: bebida
    }
    try {
      await CardapioModels.update(novosDados, { where: cardapio })
      res.status(200).json({ mensagem: 'Cardápio atualizado com sucesso!' })
    } catch (error) {
      return res.status(401).json({ mensagem: error.message })
    }
  }
  static async deleteId(req, res) {
    const { id } = req.params
    const cardapio = await CardapioModels.findByPk(id, { raw: true })
    if (!cardapio) {
      return res.status(401).json({ mensagem: 'Cardápio não encontrado!' })
    }
    try {
      await CardapioModels.destroy({ where: cardapio })
      res.status(200).json({ mensagem: 'Cardápio deletado com sucesso!' })
    } catch (error) {
      return res.status(401).json({ mensagem: error.message })
    }
  }
}
module.exports = CardapioControllers
