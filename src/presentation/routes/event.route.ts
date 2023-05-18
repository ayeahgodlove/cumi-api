// src/infrastructure/routes/event-routes.ts
import { Router } from "express";
import { EventsController } from "../controllers/event.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";
import multer from "multer";
import { fileFilter } from "../../shared/helper/multer.config";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/events");
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
const eventController = new EventsController();

const eventRouter = Router();

eventRouter.get("", isAuthenticatedMiddleware, eventController.getAll);
eventRouter.get("/:id", isAuthenticatedMiddleware, eventController.getEventById);
eventRouter.post(
  "",
  isAuthenticatedMiddleware,
  upload.single("imageUrl"),
  eventController.createEvent
);
eventRouter.put(
  "/:id",
  isAuthenticatedMiddleware,
  upload.single("imageUrl"),
  eventController.updateEvent
);
eventRouter.delete("/:id", isAuthenticatedMiddleware, eventController.deleteEvent);

export default eventRouter;
