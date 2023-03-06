const { User } = require("../models");

class UserController {
  static async getAllUserDB(req, res) {
    try {
      const userList = await User.findAll();
      res.status(200).send(userList);
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
  static async getUserById(req, res) {
    try {
      const { id } = req.params;

      const foundUser = await User.findOne({
        where: {
          id,
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
      const foundUser = await User.findOne({
        where: {
          id,
        },
      });
      if (foundUser) {
        await User.destroy({
          where: {
            id,
          },
        });
        const userListUpdate = await User.findAll();
        res
          .status(201)
          .send(
            `Delete success user with id ${id} - User list update - ${JSON.stringify(
              userListUpdate
            )} `
          );
      } else {
        res.status(404).send("User Not Found");
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "User is working wrong!",
      });
    }
  }
  static async deleteAllUser(req, res) {
    try {
      const { type } = req.body;

      if (type) {
        console.log("Admin was enter user type");
        await User.destroy({
          where: {
            user_type: type,
          },
        });

        const userListUpdate = await User.findAll();

        res.status(201).send({
          status: 201,
          message: `Delete success users with type : ${type}`,
          data: userListUpdate,
        });
      } else {
        console.log("Admin wasn't enter user type");

        await User.destroy({
          truncate: true,
        });

        res.status(201).send({
          status: 201,
          message: `Delete success all users`,
        });
      }
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
        user_group,
        user_phone,
        user_email,
        user_region,
        user_commune,
        user_address,
      } = req.body;

      const foundCustomer = await User.findOne({
        where: {
          user_code,
          user_phone,
          user_email,
          user_name,
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
          user_group,
          user_phone,
          user_email,
          user_region,
          user_commune,
          user_address,
        };
        const newUserCreated = await User.create(newCustomer);
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