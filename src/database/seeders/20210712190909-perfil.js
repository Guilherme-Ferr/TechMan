"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("profiles", [
      {
        profile: "Comum",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        profile: "Admnistrador",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        profile: "Tecnico",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        profile: "Gerente",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
