const Client = require('./client')

function Sms(token) {

  const c = Client(token)
  
  this.send = function (phone_number, text) {
    return c.post('/sms', {
      numero_destino: phone_number,
      mensagem: text,
      resposta_usuario: true,
      multi_sms: true
    })
  }

  this.getStatus = function(id) {
    return c.get(`/sms/${id}`)
  }

}

module.exports = Sms
