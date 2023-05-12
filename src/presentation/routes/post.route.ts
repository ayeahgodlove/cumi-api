// src/infrastructure/routes/post-routes.ts
import { Router } from "express";
import { PostsController } from "../controllers/post.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";

const postController = new PostsController();

const postRouter = Router();

postRouter.get("", isAuthenticatedMiddleware, postController.getAll);
postRouter.get("/:id", isAuthenticatedMiddleware, postController.getPostById);
postRouter.post("", isAuthenticatedMiddleware, postController.createPost);
postRouter.put("/:id", isAuthenticatedMiddleware, postController.updatePost);
postRouter.delete("/:id", isAuthenticatedMiddleware, postController.deletePost);

export default postRouter;
