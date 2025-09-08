"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      ProductId: {
        primaryKey: true,
        unique: true,
        type: Sequelize.STRING,
      },
      Name: {
        type: Sequelize.STRING,
      },
      Price: {
        type: Sequelize.FLOAT,
      },
      Category: {
        type: Sequelize.STRING,
      },
      Image_Url: {
        type: Sequelize.STRING,
      },
      Description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
