
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id')
        tbl.string('maker', 255).notNullable().index()
        tbl.string('model', 255).notNullable().index()
        tbl.string('transmission', 255).index()
        tbl.integer('mileage').notNullable().index()
        tbl.integer('VIN').notNullable().index()
        tbl.integer('clean').defaultTo(1)

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};

