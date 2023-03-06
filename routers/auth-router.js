const express = require("express");
const authRouter = express.Router();
const AuthController = require("../controller/auth-controller.js");

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);

module.exports = { authRouter };
