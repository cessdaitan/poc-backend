"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      { tableName: "address_book" },
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        first_name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        last_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        phone: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true
        },
        address_street: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        address_number: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        zip_code: {
          type: Sequelize.STRING,
          allowNull: true
        },
        birth_date: {
          type: Sequelize.DATEONLY,
          allowNull: true
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("address_book");
  }
};
