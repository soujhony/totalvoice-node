const Client = require('./client')
const defaultResolve = require('./utils').defaultResolve
const defaultReject = require('./utils').defaultReject

function Conta(token) {

  const client = Client(token)
  
  this.saldo = function () {
    return client.get('/saldo')
    .then(defaultResolve, defaultReject)
  }

  this.read = function () {
    return client.get('/conta')
    .then(defaultResolve, defaultReject)
  }

  this.update = function (conta) {
    return client.put('/conta', {
      nome: conta.nome,
      login: conta.login,
      senha: conta.senha
    })
    .then(defaultResolve, defaultReject)
  }

}

module.exports = Conta
