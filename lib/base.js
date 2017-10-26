const URL = 'https://api.totalvoice.com.br'

module.exports = function(token) {
  return {
    token,
    smsUrl(id) {
      return id ? `${URL}/sms/${id}` : `${URL}/sms`
    },
    saldoUrl() {
      return URL + '/saldo'
    },
    header() {
      return {
        'Access-Token': this.token
      }
    }
  }
}