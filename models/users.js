"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Orders, {
        foreignKey: "user_id",
      });
      Users.hasMany(models.UserHistoryOrderList, {
        foreignKey: "user_id",
      });
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_name: {
        type: DataTypes.STRING,
      },
      // ? admin / employee / customer - Nếu không nhập thì auto employee
      user_type: {
        type: DataTypes.STRING,
      },
      // ? Mã khách hàng
      user_code: {
        type: DataTypes.STRING,
      },
      user_phone: {
        type: DataTypes.STRING,
      },
      user_email: {
        type: DataTypes.STRING,
      },
      user_password: {
        type: DataTypes.STRING,
      },
      // ? Tỉnh hoặc Thành phố
      user_region: {
        type: DataTypes.STRING,
      },
      // ? Xã / phường
      user_commune: {
        type: DataTypes.STRING,
      },
      // ? Mô tả địa chỉ giao hàng
      user_address: {
        type: DataTypes.STRING,
      },
      // ? Mô tả địa chỉ nhận hàng
      user_receipt_address: {
        type: DataTypes.STRING,
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
