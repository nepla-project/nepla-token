require('dotenv').config();

module.exports = [
  process.env.TOKEN_NAME,
  process.env.TOKEN_SYMBOL,
  process.env.TOKEN_INITIAL_SUPPLY,
  process.env.GENESIS_ADDRESS,
]