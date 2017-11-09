const Client = require('./client')
const utils = require('./utils')

function Sms(token) {

  const c = Client(token)
  
  this.send = function (phone_number, text, resposta_usuairo = true, multi_sms = true) {
    return c.post('/sms', {
      numero_destino: phone_number,
      mensagem: text,
      resposta_usuario,
      multi_sms
    }).then(utils.resolve, utils.reject)
  }

  this.status = function(id) {
    return c.get(`/sms/${id}`)
      .then(utils.resolve, utils.reject)
  }

  this.relatorio = function() {
    return c.get('/sms/relatorio')
      .then(utils.resolve, utils.reject)
  }

}

module.exports = Sms
