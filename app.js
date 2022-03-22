const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')

const app = express()
app.use(express.json())

const sequelize = require('./src/database/conectar.js')

const Cardapios = require('./src/models/CardapioModels.js')
const routes = require('./src/routes/cardapioRoutes.js')

const port = 3000

app.use('/cardapio', routes)

async function sincronizar() {
  try {
    await sequelize.sync()
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
  } catch (error) {
    console.log('Erro ao conectar com o banco', error)
  }
}
sincronizar()
