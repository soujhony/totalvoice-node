const Client = require('./client')

function Conta(token) {

  const client = Client(token)

  const ROTA_CONTA = '/conta'

  this.criar = function (conta) {
    return client.post(ROTA_CONTA, conta)
  }

  this.buscaConta = function (id) {
    return client.get(`${ROTA_CONTA}/${id}`)
  }

  this.excluir = function (id) {
    return client.delete(`${ROTA_CONTA}/${id}`)
  }

  this.atualizar = function (id, data) {
    return client.put(`${ROTA_CONTA}/${id}`, data)
  }

  this.relatorio = function () {
    return client.get(`${ROTA_CONTA}/relatorio`)
  }

}

module.exports = Conta
