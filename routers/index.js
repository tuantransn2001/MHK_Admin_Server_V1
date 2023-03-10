const express = require("express");
const rootRouter = express.Router();

const { userRouter } = require("../routers/user-router");
const { authRouter } = require("../routers/auth-router");
const { productRouter } = require("../routers/product-router");

rootRouter.use("/user", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/product", productRouter);

module.exports = { rootRouter };
