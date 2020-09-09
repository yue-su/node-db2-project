const knex = require("knex")

require("dotenv").config()
const knexfile = require("../knexfile")

const environment = "production"

const config = knexfile[environment]

module.exports = knex(config)
