// src/infrastructure/routes/comment-routes.ts
import { Router } from "express";
import { CommentsController } from "../controllers/comment.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";

const commentController = new CommentsController();

const commentRouter = Router();

commentRouter.get("/:postId", isAuthenticatedMiddleware, commentController.getPostComments);
// commentRouter.get("/:id", isAuthenticatedMiddleware, commentController.getCommentById);
commentRouter.post("/", isAuthenticatedMiddleware, commentController.createComment); //create comment
commentRouter.patch("/:id", isAuthenticatedMiddleware, commentController.updateComment);
commentRouter.delete("/:id", isAuthenticatedMiddleware, commentController.deleteComment);

export default commentRouter;
