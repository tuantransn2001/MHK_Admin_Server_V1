"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_product_item_id: {
        type: Sequelize.INTEGER,
      },
      agency_branch_product_item_id: {
        type: Sequelize.INTEGER,
      },
      product_image: {
        type: Sequelize.INTEGER,
      },
      product_sku: {
        type: Sequelize.STRING,
      },
      product_barcode: {
        type: Sequelize.STRING,
      },
      product_weight: {
        type: Sequelize.STRING,
      },
      product_unit_type: {
        type: Sequelize.STRING,
      },
      product_classify: {
        type: Sequelize.STRING,
      },
      product_type: {
        type: Sequelize.STRING,
      },
      product_branch: {
        type: Sequelize.STRING,
      },
      product_tags: {
        type: Sequelize.STRING,
      },
      product_retail_price: {
        type: Sequelize.STRING,
      },
      product_shopee_price: {
        type: Sequelize.STRING,
      },
      product_price_sell_over_10m: {
        type: Sequelize.STRING,
      },
      product_price_sell_under_10m: {
        type: Sequelize.STRING,
      },
      product_warranty: {
        type: Sequelize.STRING,
      },
      product_wholesale_price: {
        type: Sequelize.STRING,
      },
      product_import_shopee_price: {
        type: Sequelize.STRING,
      },
      product_sell_status: {
        type: Sequelize.STRING,
      },
      product_inventory: {
        type: Sequelize.STRING,
      },
      product_can_be_sold: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Products");
  },
};
