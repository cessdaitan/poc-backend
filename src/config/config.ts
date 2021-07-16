require("dotenv").config();
const getenv = require("getenv");

module.exports = {
  environment: {
    stage: getenv.string("ENVIRONMENT"),
    port: getenv.int("PORT"),
    // apiKey: getenv.string("API_KEY")
  },
  database: {
    password: getenv.string("DATABASE_PASSWORD"),
    database: getenv.string("DATABASE_NAME"),
    username: getenv.string("DATABASE_USERNAME"),
    dialect: getenv.string("DATABASE_DIALECT"),
    port: getenv.int("DATABASE_PORT"),
    host: getenv.string("DATABASE_HOST"),
  }
};
