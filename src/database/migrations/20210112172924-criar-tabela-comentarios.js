"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("comment", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      equipament: {
        type: Sequelize.INTEGER,
        references: {
          model: "equipaments",
          key: "id",
        },
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
    queryInterface.dropTable("comment");
  },
};
