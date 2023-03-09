"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Shippings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_id: {
        type: Sequelize.STRING,
      },
      shipping_unit: {
        type: Sequelize.STRING,
      },
      shipping_option: {
        type: Sequelize.STRING,
      },
      shipping_order_product_subTotal_weight: {
        type: Sequelize.STRING,
      },
      shipping_order_product_length: {
        type: Sequelize.STRING,
      },
      shipping_order_product_width: {
        type: Sequelize.STRING,
      },
      shipping_order_product_height: {
        type: Sequelize.STRING,
      },
      shipping_order_delivery_note: {
        type: Sequelize.STRING,
      },
      shipping_order_note: {
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
    await queryInterface.dropTable("Shippings");
  },
};
