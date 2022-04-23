const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProductById,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");

router.param("productId", getProductById);

router.post("/product/create", createProduct);

router.get("/product/:productId", getProduct);

router.put("/product/:productId", updateProduct);

router.delete("/product/:productId", deleteProduct);

module.exports = router;
