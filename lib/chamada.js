const Client = require('./client')

function Chamada(token) {

  const client = Client(token)

  const ROTA_CHAMADA = '/chamada'

  this.ligar = function (numero_origem, numero_destino, opcoes = {}) {
    return client.post(ROTA_CHAMADA, {
      numero_origem,
      numero_destino,
      ...opcoes
    })
  }

  this.encerrar = function (id) {
    return client.delete(`${ROTA_CHAMADA}/${id}`)
  }

  this.buscaChamada = function (id) {
    return client.get(`${ROTA_CHAMADA}/${id}`)
  }

  this.downloadGravacao = function (id) {
    return client.get(`${ROTA_CHAMADA}/${id}/gravacao`)
  }

  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_CHAMADA}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }

  this.escutar = function (id, numero, modo) {
    return client.post(`${ROTA_CHAMADA}/${id}/escuta`, {
      numero,
      modo
    })
  }

  this.transferir = function (id, numero, perna) {
    return client.post(`${ROTA_CHAMADA}/${id}/transfer`, {
      numero,
      perna
    })
  }

  this.avaliar = function (id, nota, comentario) {
    return client.post(`${ROTA_CHAMADA}/${id}/transfer`, {
      nota, 
      comentario
    })
  }
}

module.exports = Chamada
