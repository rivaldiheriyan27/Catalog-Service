const { ProductControllers } = require("../controllers/ProdoctControllers");
const express = require("express");
const router = express.Router();
const errorHandler = require("../middlewares/errorHandler");

router.get("/", ProductControllers.listProducts); // /products?page=&limit=
router.get("/:ProdictId", ProductControllers.getProductById);

router.post("/", ProductControllers.createProduct);
// router.post("/ai-summary", ProductControllers.aiSummary); // optional

router.use(errorHandler);

module.exports = router;
