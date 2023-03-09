"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AgencyBranchs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AgencyBranchs.hasMany(models.AgencyBranchsProductItems, {
        foreignKey: "agency_product_id",
      });
    }
  }
  AgencyBranchs.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      agency_branch_name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "AgencyBranchs",
    }
  );
  return AgencyBranchs;
};
