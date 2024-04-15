// src/infrastructure/routes/document-routes.ts
import { Router } from "express";
import { DocumentsController } from "../controllers/document.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";

const documentController = new DocumentsController();

const documentRouter = Router();

documentRouter.get("", documentController.getAll);
documentRouter.get(
  "/:id",
  isAuthenticatedMiddleware,
  documentController.getDocumentById
);
documentRouter.post(
  "",
  documentController.createDocument
);
documentRouter.patch(
  "/:id",
  isAuthenticatedMiddleware,
  documentController.updateDocument
);
documentRouter.delete(
  "/:id",
  isAuthenticatedMiddleware,
  documentController.deleteDocument
);

export default documentRouter;
