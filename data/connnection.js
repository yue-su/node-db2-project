const knex = require("knex")

require("dotenv").config()
const knexfile = require("../knexfile")

const environment = process.env.NODE_ENV || "development"


const config = knexfile[environment]

module.exports = knex(config)
