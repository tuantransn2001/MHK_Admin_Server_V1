const express = require("express");
const productRouter = express.Router();
const { authenticate } = require("../middlewares/auth/authenticate");
const ProductController = require("../controller/product-controller");

productRouter.get("/get-all", authenticate, ProductController.getProductList);
productRouter.post(
  "/create-new",
  authenticate,
  ProductController.createNewProduct
);
productRouter.delete(
  "/delete-by-id/:id",
  authenticate,
  ProductController.deleteProductByID
);

module.exports = { productRouter };
