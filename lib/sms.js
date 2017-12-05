const Client = require('./client')

function Sms(token) {

  const client = Client(token)

  const ROTA_SMS = '/sms'

  this.enviar = function (numero_destino, mensagem, resposta_usuario = true, multi_sms = true) {
    return client.post(ROTA_SMS, {
      numero_destino,
      mensagem,
      resposta_usuario,
      multi_sms
    })
  }

  this.buscaSms = function (id) {
    return client.get(`${ROTA_SMS}/${id}`)
  }

  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_SMS}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }
}

module.exports = Sms
