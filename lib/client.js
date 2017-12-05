const axios = require('axios')
const defaultResolve = require('./utils').defaultResolve
const defaultReject = require('./utils').defaultReject

module.exports = function (token, resolve = defaultResolve, reject = defaultReject) {
  const instance = axios.create({
    baseURL: 'https://api.totalvoice.com.br',
    timeout: 5000,
    headers: {
      'Access-Token': token,
      'Content-Type': 'application/json'
    }
  })
  instance.interceptors.response.use(resolve, reject)
  return instance
}
