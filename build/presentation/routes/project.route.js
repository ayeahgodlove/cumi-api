"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/project-routes.ts
const express_1 = require("express");
const project_controller_1 = require("../controllers/project.controller");
const is_authenticated_middleware_1 = require("../../shared/middlewares/is-authenticated.middleware");
const projectController = new project_controller_1.ProjectsController();
const projectRouter = (0, express_1.Router)();
projectRouter.get("", projectController.getAll);
projectRouter.get("/:id", projectController.getProjectById);
projectRouter.post("", is_authenticated_middleware_1.isAuthenticatedMiddleware, projectController.createProject);
projectRouter.patch("/:id", is_authenticated_middleware_1.isAuthenticatedMiddleware, projectController.updateProject);
projectRouter.delete("/:id", is_authenticated_middleware_1.isAuthenticatedMiddleware, projectController.deleteProject);
exports.default = projectRouter;
