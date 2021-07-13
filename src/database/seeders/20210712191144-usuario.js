"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        password: "111111",
        profile: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        password: "212121",
        profile: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        password: "414141",
        profile: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        password: "313131",
        profile: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
