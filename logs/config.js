const dotenv = require('dotenv')

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    NODE_ENV: process.env.NODE_ENV
}