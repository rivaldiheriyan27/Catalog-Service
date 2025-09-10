const { Op } = require("sequelize");
const { Product } = require("../models");
const { v4: uuidv4 } = require("uuid");

class ProductControllers {
  static async createProduct(req, res, next) {
    try {
      const { name, price, category, description } = req.body;

      // handle file upload (pakai multer)
      let imageUrl = req.file ? `/images/${req.file.filename}` : null;

      const product = await Product.create({
        ProductId: uuidv4(),
        Name: name,
        Price: parseFloat(price),
        Category: category,
        Image_Url: imageUrl,
        Description: description,
      });

      res.status(201).json({
        message: "Product created successfully",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  static async listProducts(req, res, next) {
    try {
      const limit = parseInt(req.query.limit) || 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;

      let whereClause = {
        deletedAt: null,
      };

      if (req.query.name && req.query.name !== "null") {
        whereClause.Name = { [Op.iLike]: `%${req.query.name}%` };
      }

      if (req.query.category && req.query.category !== "null") {
        whereClause.Category = { [Op.iLike]: `%${req.query.category}%` };
      }

      const products = await Product.findAndCountAll({
        limit,
        offset,
        where: whereClause,
      });

      res.status(200).json({
        totalItems: products.count,
        totalPages: Math.ceil(products.count / limit),
        currentPage: parseInt(page),
        data: products.rows,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { ProdictId } = req.params;

      const product = await Product.findOne({
        where: { ProductId: ProdictId, deletedAt: null },
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = { ProductControllers };
