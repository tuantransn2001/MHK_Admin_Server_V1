const express = require("express");
const rootRouter = express.Router();
const { userRouter } = require("../routers/user-router");
const { authRouter } = require("../routers/auth-router");

rootRouter.use("/user", userRouter);
rootRouter.use("/auth", authRouter);

module.exports = { rootRouter };
