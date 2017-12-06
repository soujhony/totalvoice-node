const Client = require('./client')

function Conferencia(token) {

  const client = Client(token)

  const ROTA_CONFERENCIA = '/conferencia'

  this.criaConferencia = function () {
    return client.post(ROTA_CONFERENCIA, {})
  }

  this.buscaConferencia = function (id) {
    return client.get(`${ROTA_CONFERENCIA}/${id}`)
  }

  this.addNumeroConferencia = function (id, numero, bina, gravar_audio) {
    return client.post(`${ROTA_CONFERENCIA}/${id}`, {
      numero,
      bina,
      gravar_audio
    })
  }

}

module.exports = Conferencia
