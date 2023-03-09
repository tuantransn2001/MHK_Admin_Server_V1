"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: "user_id",
      });
      Orders.belongsTo(models.UserHistoryOrderList, {
        foreignKey: "user_history_order_list_id",
      });
      Orders.hasOne(models.Shippings, {
        foreignKey: "order_id",
      });
      Orders.hasMany(models.OrderProductList, {
        foreignKey: "order_id",
      });
    }
  }
  Orders.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_history_order_list_id: {
        type: DataTypes.NUMBER,
      },
      user_id: {
        type: DataTypes.NUMBER,
      },
      order_tags: {
        type: DataTypes.STRING,
      },
      order_status: {
        type: DataTypes.STRING,
      },
      order_note: {
        type: DataTypes.STRING,
      },
      order_sold_by: {
        type: DataTypes.STRING,
      },
      order_sold_at: {
        type: DataTypes.STRING,
      },
      order_product_source: {
        type: DataTypes.STRING,
      },
      order_code: {
        type: DataTypes.STRING,
      },
      order_payment_type: {
        type: DataTypes.STRING,
      },
      order_delivery_date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
