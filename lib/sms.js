const Client = require('./client')
const defaultResolve = require('./utils').defaultResolve
const defaultReject = require('./utils').defaultReject

function Sms(token) {

  const client = Client(token)
  
  this.enviar = function (numero_destino, mensagem, resposta_usuario = true, multi_sms = true) {
    return client.post('/sms', {
      numero_destino,
      mensagem,
      resposta_usuario,
      multi_sms
    }).then(defaultResolve, defaultReject)
  }

  this.buscaSms = function(id) {
    return client.get(`/sms/${id}`)
      .then(defaultResolve, defaultReject)
  }

  this.relatorio = function(data_inicio, data_fim) {
    return client.get('/sms/relatorio', 
      {
        params: {
          data_inicio, 
          data_fim
        }
      }).then(defaultResolve, defaultReject)
  }
}

module.exports = Sms
