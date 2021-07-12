"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //aqui dizemos o que deve ser feito

    queryInterface.createTable("students", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profile: {
        type: Sequelize.INTEGER,
        references: {
          model: "profiles",
          key: "id",
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    //aqui dizemos o que deve ser desfeito

    queryInterface.dropTable("students");
  },
};
