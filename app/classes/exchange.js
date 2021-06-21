class Exchange {
  constructor (address, exchangeName) {
    this.address = address
    this.exchangeName = exchangeName

    this.setAddress = this.setAddress.bind(this)
    this.setExchangeName = this.setExchangeName.bind(this)
  }

  setAddress (address) {
    this.address = address
  }

  setExchangeName (exchangeName) {
    this.exchangeName = exchangeName
  }
}

module.exports = Exchange
