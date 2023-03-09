"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserHistoryOrderList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserHistoryOrderList.belongsTo(models.Users, {
        foreignKey: "user_id",
      });
      UserHistoryOrderList.hasMany(models.Orders, {
        foreignKey: "user_history_order_list_id",
      });
    }
  }
  UserHistoryOrderList.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "UserHistoryOrderList",
    }
  );
  return UserHistoryOrderList;
};
