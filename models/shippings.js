"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shippings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shippings.belongsTo(models.Orders, {
        foreignKey: "order_id",
      });
    }
  }
  Shippings.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_id: {
        type: DataTypes.STRING,
      },
      shipping_unit: {
        type: DataTypes.STRING,
      },
      shipping_option: {
        type: DataTypes.STRING,
      },
      shipping_order_product_subTotal_weight: {
        type: DataTypes.STRING,
      },
      shipping_order_product_length: {
        type: DataTypes.STRING,
      },
      shipping_order_product_width: {
        type: DataTypes.STRING,
      },
      shipping_order_product_height: {
        type: DataTypes.STRING,
      },
      shipping_order_delivery_note: {
        type: DataTypes.STRING,
      },
      shipping_order_note: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Shippings",
    }
  );
  return Shippings;
};
