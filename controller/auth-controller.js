const { User } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleGetFirstNameFromFullName = (fullName) => {
  let targetIndex = null;
  for (let index = fullName.length - 1; index >= 0; index--) {
    if (fullName[index] === " ") {
      targetIndex = index + 1;
      break;
    }
  }

  return fullName.slice(targetIndex);
};

class AuthController {
  static async register(req, res) {
    try {
      const { name, phone, email, password, type } = req.body;
      // * 1: Check user is already exists or not
      const oldUser = await User.findOne({
        where: {
          user_email: email,
        },
      });

      if (oldUser) {
        res.status(404).send(`User is already exists!`);
      } else {
        const newUser = {
          user_type: type || "employee",
          user_name: name,
          user_phone: phone,
          user_email: email,
          user_password: password,
        };
        await User.create(newUser);
        res.status(200).send({
          status: "success",
          data: newUser,
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      // * Check user'email,password is correct or not
      const foundUser = await User.findOne({
        where: {
          user_email: email,
          user_password: password,
        },
      });

      if (!foundUser) {
        // ! If in-correct -> send message
        res.status(404).send({
          status: "error",
          message: "Email and or Password is wrong! Please try again!",
        });
      } else {
        // ? If correct ->  create token -> send to client side

        const jwtSecretKey = process.env.JWT_TOKEN_SECRET_KEY;

        const tokenData = {
          id: foundUser.id,
          email: foundUser.email,
        };

        const token = jwt.sign(tokenData, jwtSecretKey, {
          expiresIn: "7200000s",
        });

        res.status(200).send({
          status: "success",
          name: handleGetFirstNameFromFullName(foundUser.user_name),
          token,
        });
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "Server error",
      });
    }
  }
}

module.exports = AuthController;
