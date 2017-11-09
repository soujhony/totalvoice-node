module.exports = {
  resolve (data) {
    return Promise.resolve(data.data)
  },
  reject (error) {
    return Promise.reject({
      message: error.message,
      code: error.code
    })
  }
}
