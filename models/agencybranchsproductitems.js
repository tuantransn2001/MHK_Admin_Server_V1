"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AgencyBranchsProductItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AgencyBranchsProductItems.belongsTo(models.AgencyBranchs, {
        foreignKey: "agency_product_id",
      });
    }
  }
  AgencyBranchsProductItems.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      agency_product_id: {
        type: DataTypes.INTEGER,
      },
      agency_branch_product_name: {
        type: DataTypes.STRING,
      },
      agency_branch_product_inventory: {
        type: DataTypes.INTEGER,
      },
      agency_branch_product_cost_price: {
        type: DataTypes.STRING,
      },
      agency_branch_product_amount_can_be_sold: {
        type: DataTypes.INTEGER,
      },
      agency_branch_product_amount_being_traded: {
        type: DataTypes.INTEGER,
      },
      agency_branch_product_amount_importing: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "AgencyBranchsProductItems",
    }
  );
  return AgencyBranchsProductItems;
};
