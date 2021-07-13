"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("comments", [
      {
        comment:
          "Deverá fazer o download do aplicativo da razer para alterar a cor do mouse.",
        equipament: 2,
        profile: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        comment: "Problema de aquecimento no processador após 1 ano de uso.",
        equipament: 2,
        profile: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
