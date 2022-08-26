"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Hassan",
        lastName: "Hassouna",
        email: "hhasona@gmail.com",
        password: "hh123789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {})
  },
}
