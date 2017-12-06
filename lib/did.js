const Client = require('./client')

function Did(token) {

  const client = Client(token)

  const ROTA_DID = '/did'

  this.lista = function () {
    return client.get(ROTA_DID)
  }

  this.excluir = function (id) {
    return client.delete(`${ROTA_DID}/${id}`)
  }

  this.atualizar = function (id, data = {}) {
    return client.put(`${ROTA_DID}/${id}`, data)
  }

  this.listaEstoque = function () {
    return client.get(`${ROTA_DID}/estoque`)
  }

  this.adquirir = function (id) {
    return client.post(`${ROTA_DID}/estoque/${id}`, {})
  }
}

module.exports = Did
