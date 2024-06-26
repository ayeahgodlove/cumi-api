"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/user-routes.ts
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const is_authenticated_middleware_1 = require("../../shared/middlewares/is-authenticated.middleware");
const multer_config_1 = require("../../shared/helper/multer.config");
const userController = new user_controller_1.UsersController();
const userRouter = (0, express_1.Router)();
userRouter.get("", userController.getAll);
userRouter.get("/:id", userController.getUserById);
userRouter.get("/me", is_authenticated_middleware_1.isAuthenticatedMiddleware, (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({
            message: "Success",
            success: true,
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failure!",
            success: false,
            errors: error.message,
        });
    }
});
userRouter.post("", userController.createUser);
userRouter.patch("/:id", is_authenticated_middleware_1.isAuthenticatedMiddleware, userController.updateUser);
userRouter.delete("/:id", is_authenticated_middleware_1.isAuthenticatedMiddleware, userController.deleteUser);
// upload user avatar image
userRouter.post("/upload", is_authenticated_middleware_1.isAuthenticatedMiddleware, multer_config_1.multerInstance.single("avatar"), userController.uploadAvatar);
// userRouter.post(
//   "/upload",
//   isAuthenticatedMiddleware,
//   multerInstance.single("avatar"),
//   (req, res) => {
//     // handle the uploaded file here
//     res.status(202).json({
//       success: true,
//       message: "File uploaded successfully!",
//     });
//   }
// );
exports.default = userRouter;
