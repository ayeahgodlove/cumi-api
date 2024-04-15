// src/infrastructure/routes/project-routes.ts
import { Router } from "express";
import { ProjectsController } from "../controllers/project.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";

const projectController = new ProjectsController();

const projectRouter = Router();

projectRouter.get("", projectController.getAll);
projectRouter.get(
  "/:id",
  projectController.getProjectById
);
projectRouter.post(
  "",
  isAuthenticatedMiddleware,
  projectController.createProject
);
projectRouter.patch(
  "/:id",
  isAuthenticatedMiddleware,
  projectController.updateProject
);
projectRouter.delete(
  "/:id",
  isAuthenticatedMiddleware,
  projectController.deleteProject
);

export default projectRouter;
