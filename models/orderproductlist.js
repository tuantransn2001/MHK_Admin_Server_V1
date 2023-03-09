"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderProductList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderProductList.belongsTo(models.Orders, {
        foreignKey: "order_id",
      });
      OrderProductList.hasMany(models.OrderProductItems, {
        foreignKey: "order_product_list_id",
      });
    }
  }
  OrderProductList.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "OrderProductList",
    }
  );
  return OrderProductList;
};
