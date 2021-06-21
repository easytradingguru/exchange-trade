const fetch = require('node-fetch')

module.exports = {
  getBaseSymbols: async (baseUrl) => {
    const _URL = 'http://' + baseUrl + '/api/v1/symbol/base'

    return await ((await fetch(_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        executionType: 'internal'
      }
    })).json())
  },

  getQouteSymbols: async (baseUrl, currency) => {
    const _URL = 'http://' + baseUrl + '/api/v1/symbol/base/' + currency + '/qoute'

    return await ((await fetch(_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        executionType: 'internal'
      }
    })).json())
  }
}
