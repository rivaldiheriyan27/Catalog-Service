const { ProductControllers } = require("../controllers/ProdoctControllers");
const express = require("express");
const router = express.Router();
const errorHandler = require("../middlewares/errorHandler");
const upload = require("../middlewares/multer");

router.get("/", ProductControllers.listProducts); // /products?page=&limit=
router.get("/:ProdictId", ProductControllers.getProductById);

router.post("/", upload.single("image"), ProductControllers.createProduct);
// router.post("/ai-summary", ProductControllers.aiSummary); // optional

router.use(errorHandler);

module.exports = router;
