const express = require("express");
const productRouter = express.Router();
const ProductController = require("../controller/product-controller");

productRouter.get("/get-all", ProductController.getProductList);
productRouter.post("/create-new", ProductController.createNewProduct);
productRouter.delete("/delete-by-id/:id", ProductController.deleteProductByID);
productRouter.delete("/delete-all", ProductController.deleteAllProduct);

module.exports = { productRouter };
