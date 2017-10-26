const got = require('got')

function Conta(token) {

  const base = require('./base')(token)
  
  this.getSaldo = function () {
    return got.get(base.saldoUrl(), {
      headers: base.headers()
    })
  }

}

module.exports = Conta
