// src/infrastructure/routes/project-routes.ts
import { Router } from "express";
import { ProjectsController } from "../controllers/project.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";
import multer from "multer";
import { fileFilter } from "../../shared/helper/multer.config";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/projects");
  },
  filename: (req, file, cb) => {
    const originalname = file.originalname;
    const filename = `${Date.now()}-${originalname.replace(/\s+/g, '').toLowerCase()}`
    cb(null, filename)
  },
});

const upload = multer({
  storage: storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});
const projectController = new ProjectsController();

const projectRouter = Router();

projectRouter.get("", isAuthenticatedMiddleware, projectController.getAll);
projectRouter.get("/:id", isAuthenticatedMiddleware, projectController.getProjectById);
projectRouter.post(
  "",
  isAuthenticatedMiddleware,
  upload.single("imageUrl"),
  projectController.createProject
);
projectRouter.put(
  "/:id",
  isAuthenticatedMiddleware,
  upload.single("imageUrl"),
  projectController.updateProject
);
projectRouter.delete("/:id", isAuthenticatedMiddleware, projectController.deleteProject);

export default projectRouter;
