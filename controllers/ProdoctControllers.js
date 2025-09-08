class ProductControllers {
  static async createProduct(req, res, next) {
    try {
      const { name, image_url, price, stock } = req.body;
    } catch (error) {}
  }

  static async listProducts(req, res, next) {
    try {
      const { limit, offset } = req.query;
      //   const offset = (page - 1) * limit;

      const products = await Product.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
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
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
      }

      return res.status(404).json({ message: "Product not found" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = { ProductControllers };
