const axios = require('axios')

module.exports = function (token) {
  return axios.create({
    baseURL: 'https://api.totalvoice.com.br',
    timeout: 5000,
    headers: {
      'Access-Token': token,
      'Content-Type': 'application/json'
    }
  })
}
