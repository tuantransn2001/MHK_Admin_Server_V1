"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.OrderProductItems, {
        foreignKey: "order_product_item_id",
      });
    }
  }
  Products.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_product_item_id: {
        type: DataTypes.INTEGER,
      },
      agency_branch_product_item_id: {
        type: DataTypes.NUMBER,
      },
      product_image: {
        type: DataTypes.INTEGER,
      },
      product_sku: {
        type: DataTypes.STRING,
      },
      product_barcode: {
        type: DataTypes.STRING,
      },
      product_weight: {
        type: DataTypes.STRING,
      },
      product_unit_type: {
        type: DataTypes.STRING,
      },
      product_classify: {
        type: DataTypes.STRING,
      },
      product_type: {
        type: DataTypes.STRING,
      },
      product_branch: {
        type: DataTypes.STRING,
      },
      product_tags: {
        type: DataTypes.STRING,
      },
      product_retail_price: {
        type: DataTypes.STRING,
      },
      product_shopee_price: {
        type: DataTypes.STRING,
      },
      product_price_sell_over_10m: {
        type: DataTypes.STRING,
      },
      product_price_sell_under_10m: {
        type: DataTypes.STRING,
      },
      product_warranty: {
        type: DataTypes.STRING,
      },
      product_wholesale_price: {
        type: DataTypes.STRING,
      },
      product_import_shopee_price: {
        type: DataTypes.STRING,
      },
      product_sell_status: {
        type: DataTypes.STRING,
      },
      product_inventory: {
        type: DataTypes.STRING,
      },
      product_can_be_sold: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
