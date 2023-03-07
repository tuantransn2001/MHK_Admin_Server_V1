"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          user_name: "Trần Thái Tuấn",
          user_type: "admin",
          user_code: null,
          user_group: null,
          user_phone: "0987654321",
          user_email: "admin1@gmail.com",
          user_password: "admin123",
          user_region: null,
          user_commune: null,
          user_address: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          user_name: "Nhân viên A",
          user_type: "employee",
          user_code: null,
          user_group: null,
          user_phone: "0987654",
          user_email: "employee1@gmail.com",
          user_password: "employee123",
          user_region: null,
          user_commune: null,
          user_address: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          user_name: "Khác hàng A",
          user_type: "customer",
          user_code: "SK12",
          user_group: "banbuon",
          user_phone: "0987654",
          user_email: "customer1@gmail.com",
          user_password: "employee123",
          user_region: "Hồ Chí Minh",
          user_commune: "Quận Bình Thạnh",
          user_address: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
