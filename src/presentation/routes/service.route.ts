// src/infrastructure/routes/service-routes.ts
import { Router } from "express";
import { ServicesController } from "../controllers/service.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";

const serviceController = new ServicesController();

const serviceRouter = Router();

serviceRouter.get("", isAuthenticatedMiddleware, serviceController.getAll);
serviceRouter.get("/:id", isAuthenticatedMiddleware, serviceController.getServiceById);
serviceRouter.post("", isAuthenticatedMiddleware, serviceController.createService);
serviceRouter.put("/:id", isAuthenticatedMiddleware, serviceController.updateService);
serviceRouter.delete("/:id", isAuthenticatedMiddleware, serviceController.deleteService);

export default serviceRouter;
