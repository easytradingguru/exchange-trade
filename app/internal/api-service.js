const fetch = require('node-fetch')

module.exports = {
  get: async (url) => {
    return await ((await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        executionType: 'internal'
      }
    })).json())
  },

  post: async (url, body) => {
    return await ((await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        executionType: 'internal'
      }
    })).json())
  }
}
