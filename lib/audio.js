const Client = require('./client')

function Audio(token) {

  const client = Client(token)

  const ROTA_AUDIO = '/audio'

  this.enviar = function (numero_destino, url_audio, opcoes = {}) {
    return client.post(ROTA_AUDIO, {
      numero_destino,
      url_audio,
      ...opcoes
    })
  }

  this.buscaAudio = function (id) {
    return client.get(`${ROTA_AUDIO}/${id}`)
  }

  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_AUDIO}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }
}

module.exports = Audio
