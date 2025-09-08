"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      ProductId: DataTypes.STRING,
      Name: DataTypes.STRING,
      Price: DataTypes.FLOAT,
      Category: DataTypes.STRING,
      Image_Url: DataTypes.STRING,
      Description: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
