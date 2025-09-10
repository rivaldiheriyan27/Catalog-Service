"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const area = require("../data/product.json");
    area.forEach((dm) => {
      dm.ProductId = uuidv4();
      dm.createdAt = new Date();
      dm.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Products", area, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {
      restartIdentity: true,
    });
  },
};
