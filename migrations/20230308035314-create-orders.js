"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_history_order_list_id: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      order_tags: {
        type: Sequelize.STRING,
      },
      order_status: {
        type: Sequelize.STRING,
      },
      order_note: {
        type: Sequelize.STRING,
      },
      order_sold_by: {
        type: Sequelize.STRING,
      },
      order_sold_at: {
        type: Sequelize.STRING,
      },
      order_product_source: {
        type: Sequelize.STRING,
      },
      order_code: {
        type: Sequelize.STRING,
      },
      order_payment_type: {
        type: Sequelize.STRING,
      },
      order_delivery_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Orders");
  },
};
