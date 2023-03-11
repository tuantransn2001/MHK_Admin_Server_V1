require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Users } = require("../../models");

const authorize = async (req, res, next) => {
  try {
    const authorizeArr = ["admin"];

    const JWT_TOKEN_SECRET_KEY = process.env.JWT_TOKEN_SECRET_KEY;
    const token = req.headers["token"] || req.body;
    const { id } = jwt.verify(token, JWT_TOKEN_SECRET_KEY);

    const foundUser = await Users.findOne({
      where: {
        id,
      },
    });
    const isAdmin = authorizeArr.includes(foundUser.user_type);

    if (isAdmin) {
      return next();
    } else {
      res.status(400).send("You do not have permission!");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { authorize };
