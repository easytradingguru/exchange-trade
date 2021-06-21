# exchange-trade

JavaScript library trade through different exchanges.

## Node.js (Install)

Requirements:

- Node.js
- NPM (Node.js Package Manager)

```bash
npm install exchange-trade --save
```

### Usage

Modular include:

```javascript
const exchangeTrade = require("exchange-trade")
...
exchangeTrade.createExchanges('kucoin_base_url', 'binance_base_url')
await exchangeTrade.getBaseSymbols('Kucoin')
```

## Release notes

### 1.0.0

This is very basic version having very basic functions.
