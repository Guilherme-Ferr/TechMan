"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("profiles", [
      {
        description: "Comum",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Administrador",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Tecnico",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Gerente",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles", null);
  },
};
