const { Products } = require("../models");

class ProductController {
  static async getProductList(req, res) {
    try {
      const productList = await Products.findAll();
      res.status(200).send(productList);
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
  static async createNewProduct(req, res) {
    try {
      const {
        product_name,
        product_sku,
        product_barcode,
        product_weight,
        product_unit_type,
        product_retail_price,
        product_shopee_price,
        product_price_sell_over_10m,
        product_price_sell_under_10m,
        product_wholesale_price,
        product_import_price,
        product_import_shopee_price,
      } = req.body;

      const foundProduct = await Products.findOne({
        where: {
          product_sku,
        },
      });

      if (foundProduct) {
        res.status(404).send({
          status: 404,
          message: `Product has been created before!`,
          data: foundProduct,
        });
      } else {
        const newProduct = {
          product_name,
          product_sku,
          product_barcode,
          product_weight,
          product_unit_type,
          product_retail_price,
          product_shopee_price,
          product_price_sell_over_10m,
          product_price_sell_under_10m,
          product_wholesale_price,
          product_import_price,
          product_import_shopee_price,
        };

        await Products.create(newProduct);

        res.status(201).send({
          status: 201,
          message: "Product has been created successfully!",
          data: newProduct,
        });
      }
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
  static async deleteProductByID(req, res) {
    try {
      const { id } = req.params;

      const foundProduct = await Products.findOne({
        where: {
          id,
        },
      });

      if (!foundProduct) {
        res.status(404).send({
          status: 404,
          message: "Product not found",
        });
      } else {
        res.status(201).send({
          status: 201,
          message: "Delete user successfully!",
          data: foundProduct,
        });
      }
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
  static async deleteAllProduct(req, res) {
    try {
      await Users.destroy({
        truncate: true,
      });

      res.status(201).send("Delete all product successfully!");
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
}

module.exports = ProductController;
