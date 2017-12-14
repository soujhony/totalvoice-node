const Client = require('./client')

function Central(token) {

  const client = Client(token)

  const ROTA_RAMAL = '/ramal'

  const ROTA_URA = '/ura'

  const ROTA_WEBPHONE = '/webphone'

  this.criarRamal = function (data) {
    return client.post(ROTA_RAMAL)
  }

  this.excluirRamal = function (id) {
    return client.delete(`${ROTA_RAMAL}/${id}`)
  }

  this.buscaRamal = function (id) {
    return client.get(`${ROTA_RAMAL}/${id}`)
  }

  this.atualizarRamal = function (id, data) {
    return client.put(`${ROTA_RAMAL}/${id}`, data)
  }

  this.relatorio = function () {
    return client.get(`${ROTA_RAMAL}/relatorio`)
  }

  this.webphone = function (data) {
    return client.get(ROTA_WEBPHONE, {
      params: data
    })
  }

  this.criarUra = function (nome, dados) {
    return client.post(ROTA_URA, {
      nome,
      dados
    })
  }

  this.excluirUra = function (id) {
    return client.delete(`${ROTA_URA}/${id}`)
  }

  this.atualizarUra = function (id, nome, dados) {
    return client.put(`${ROTA_URA}/${id}`, {
      nome,
      dados
    })
  }
}

module.exports = Central
