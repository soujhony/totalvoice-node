const Client = require('./client')
const utils = require('./utils')

function Conta(token) {

  const c = Client(token)
  
  this.saldo = function () {
    return c.get('/saldo')
      .then(utils.resolve, utils.reject)
  }

  this.read = function () {
    return c.get('/conta')
      .then(utils.resolve, utils.reject)
  }

  this.update = function (conta) {
    return c.put('/conta', {
      nome: conta.nome,
      login: conta.login,
      senha: conta.senha
    })
  }

}

module.exports = Conta
