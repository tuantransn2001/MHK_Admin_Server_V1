"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderProductItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderProductItems.belongsTo(models.OrderProductList, {
        foreignKey: "order_product_list_id",
      });
      OrderProductItems.hasOne(models.Products, {
        foreignKey: "order_product_item_id",
      });
    }
  }
  OrderProductItems.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_product_list_id: {
        type: DataTypes.INTEGER,
      },
      order_product_unit: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "OrderProductItems",
    }
  );
  return OrderProductItems;
};
