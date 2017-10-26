const got = require('got')

function Sms(token) {

  const base = require('./base')(token)
  
  this.send = function (phone_number, text) {
    return got.post(base.smsUrl(), {
      headers: base.header(),
      body: {
        numero_destino: phone_number,
        mensagem: text,
        resposta_usuario: true,
        multi_sms: true
      }
    })
  }

  this.getStatus = function(id) {
    return got.get(base.smsUrl(id), {
      headers: base.header()
    })
  }

}

module.exports = Sms
