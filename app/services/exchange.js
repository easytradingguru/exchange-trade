const api = require('../internal/api-service')

module.exports = {
  getBaseSymbols: async (baseUrl) => {
    const url = baseUrl + 'symbol/base'
    return await api.get(url)
  },

  getQouteSymbols: async (baseUrl, currency) => {
    const url = baseUrl + 'symbol/base/' + currency + '/qoute'
    return await api.get(url)
  }
}
