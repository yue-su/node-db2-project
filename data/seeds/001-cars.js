
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          maker: "Honda",
          model: "civic",
          transmission: "Auto",
          mileage: 6000,
          VIN: 123456,
          clean: null,
        },
        {
          id: 2,
          maker: "Toyota",
          model: "civic",
          transmission: "Auto",
          mileage: 6000,
          VIN: 1234567,
          clean: null,
        },
        {
          id: 3,
          maker: "Jeep",
          model: "civic",
          transmission: "Auto",
          mileage: 6000,
          VIN: 12345678,
          clean: null,
        },
        
      ])
    });
};
