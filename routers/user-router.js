const express = require("express");
const userRouter = express.Router();

const UserController = require("../controller/user-controller");
const { authenticate } = require("../middlewares/auth/authenticate");

userRouter.get("/get-all-db", authenticate, UserController.getAllUserDB);
userRouter.get("/get-by-id/:id", UserController.getUserById);
userRouter.delete("/delete-by-id/:id", UserController.deleteUserByID);
userRouter.delete("/delete-all", UserController.deleteAllUser);

userRouter.get("/get-all-customer", UserController.getAllCustomer);
userRouter.post("/create-customer", UserController.createCustomer);

module.exports = { userRouter };
