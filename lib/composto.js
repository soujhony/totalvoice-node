const Client = require('./client')

function Composto(token) {

  const client = Client(token)

  const ROTA_COMPOSTO = '/composto'

  this.enviar = function (numero_destino, dados, opcoes = {}) {
    return client.post(ROTA_COMPOSTO, {
      numero_destino,
      dados,
      ...opcoes
    })
  }

  this.buscaComposto = function (id) {
    return client.get(`${ROTA_COMPOSTO}/${id}`)
  }

  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_COMPOSTO}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }
}

module.exports = Composto
