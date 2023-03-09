"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AgencyBranchsProductItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      agency_product_id: {
        type: Sequelize.INTEGER,
      },
      agency_branch_product_name: {
        type: Sequelize.STRING,
      },
      agency_branch_product_inventory: {
        type: Sequelize.INTEGER,
      },
      agency_branch_product_cost_price: {
        type: Sequelize.STRING,
      },
      agency_branch_product_amount_can_be_sold: {
        type: Sequelize.INTEGER,
      },
      agency_branch_product_amount_being_traded: {
        type: Sequelize.INTEGER,
      },
      agency_branch_product_amount_importing: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("AgencyBranchsProductItems");
  },
};
