const { Users } = require("../models");

class UserController {
  static async getAllUserDB(req, res) {
    try {
      const userList = await Users.findAll({
        where: {
          isDelete: null,
        },
      });
      res.status(200).send(userList);
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
  static async getUserById(req, res) {
    try {
      const { id } = req.params;

      const foundUser = await Users.findOne({
        where: {
          id,
          isDelete: null,
        },
      });

      if (foundUser) {
        res.status(200).send(foundUser);
      } else {
        res.status(404).send({
          status: "error",
          data: "User not found!",
        });
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "Server is working wrong!",
      });
    }
  }
  static async deleteUserByID(req, res) {
    try {
      const { id } = req.params;
      const foundUser = await Users.findOne({
        where: {
          id,
        },
      });
      if (foundUser) {
        await foundUser.set({
          isDelete: true,
        });
        await foundUser.save();
        res.status(201).send({
          status: 201,
          message: `Delete user successfully!`,
        });
      } else {
        res.status(404).send("User Not Found");
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "User is working wrong!",
        error: err,
      });
    }
  }
  static async getAllCustomer(req, res) {
    try {
      const customerList = await Users.findAll({
        where: {
          user_type: "customer",
          isDelete: null,
        },
      });
      res.status(200).send(customerList);
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "Server is working wrong!",
      });
    }
  }

  static async createCustomer(req, res) {
    try {
      const {
        user_name,
        user_code,
        user_phone,
        user_email,
        user_region,
        user_commune,
        user_address,
      } = req.body;

      const foundCustomer = await Users.findOne({
        where: {
          user_code,
        },
      });

      if (foundCustomer) {
        res
          .status(404)
          .send(
            `Customer have been created before! - ${JSON.stringify(
              foundCustomer
            )}`
          );
      } else {
        const newCustomer = {
          user_type: "customer",
          user_name,
          user_code,
          user_phone,
          user_email,
          user_region,
          user_commune,
          user_address,
        };
        const newUserCreated = await Users.create(newCustomer);
        res.status(201).send({
          status: 201,
          message: "Create new user successfully !",
          data: newUserCreated,
        });
      }
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
}

module.exports = UserController;
