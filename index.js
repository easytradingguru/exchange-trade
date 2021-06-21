const Exchange = require('./app/classes/exchange')
const exchangeService = require('./app/services/exchange')

let kucoinExchange = null
let binanceExchange = null

module.exports = {
  createExchanges: (kucoinAddress, binanceAddress) => {
    let kucoinFlag = false
    let binanceFlag = false

    if (kucoinAddress) {
      kucoinExchange = new Exchange(kucoinAddress, 'Kucoin')
      kucoinFlag = true
    }

    if (binanceAddress) {
      binanceExchange = new Exchange(binanceAddress, 'Binance')
      binanceFlag = true
    }

    if (kucoinFlag && binanceFlag) {
      return { exchangeNames: ['Kucoin', 'Binance'] }
    } else if (kucoinFlag) {
      return { exchangeName: 'Kucoin' }
    } else if (binanceFlag) {
      return { exchangeName: 'Binance' }
    }

    const error = new Error('No exchange found', 404)
    throw error
  },

  createKucoinExchange: (kucoinAddress) => {
    if (kucoinAddress) {
      kucoinExchange = new Exchange(kucoinAddress, 'Kucoin')
    }

    return { exchangeName: 'Kucoin' }
  },

  createBinanceExchange: (binanceAddress) => {
    if (binanceAddress) {
      binanceExchange = new Exchange(binanceAddress, 'Binance')
    }

    return { exchangeName: 'Binance' }
  },

  getBaseSymbols: async (exchangeName) => {
    if (exchangeName === 'Kucoin') {
      return await exchangeService.getBaseSymbols(kucoinExchange.address)
    } else if (exchangeName === 'Binance') {
      return await exchangeService.getBaseSymbols(binanceExchange.address)
    }

    const error = new Error('Invalid exchange name', 404)
    throw error
  },

  getQouteSymbols: async (exchangeName, baseSymbol) => {
    if (exchangeName === 'Kucoin') {
      return await exchangeService.getQouteSymbols(kucoinExchange.address, baseSymbol)
    } else if (exchangeName === 'Binance') {
      return await exchangeService.getQouteSymbols(binanceExchange.address, baseSymbol)
    }

    const error = new Error('Invalid exchange name', 404)
    throw error
  }
}
