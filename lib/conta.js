const Client = require('./client')

function Conta(token) {

  const c = Client(token)
  
  this.getSaldo = function () {
    return c.get('/saldo')
  }

}

module.exports = Conta
