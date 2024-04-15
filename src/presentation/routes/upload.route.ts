// src/infrastructure/routes/user-routes.ts
import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";
import { fileFilter } from "../../shared/helper/multer.config";
import multer from "multer";
import { UploadControllers } from "../controllers/upload.controller";

const uploadRouter = Router();

const uploadController = new UploadControllers();

function fileStorage(folderName: string) {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./public/uploads/${folderName}`);
    },
    filename: (req, file, cb) => {
      const originalname = file.originalname;
      const filename = `${Date.now()}-${originalname
        .replace(/\s+/g, "")
        .toLowerCase()}`;
      cb(null, filename);
    },
  });
}

const upload = (folderName: string) =>
  multer({
    storage: fileStorage(folderName),
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
  });

uploadRouter.post(
  "/banners",
  upload("banners").single("image"),
  uploadController.uploadFile
);

uploadRouter.post(
  "/projects",
  // isAuthenticatedMiddleware,
  upload("projects").single("imageUrl"),
  uploadController.uploadFile
);

uploadRouter.post(
  "/posts",
//   isAuthenticatedMiddleware,
  upload("posts").single("imageUrl"),
  uploadController.uploadFile
);

uploadRouter.post(
  "/documents",
  // isAuthenticatedMiddleware,
  upload("documents").single("image"),
  uploadController.uploadFile
);

uploadRouter.post(
  "/events",
  // isAuthenticatedMiddleware,
  upload("events").single("imageUrl"),
  uploadController.uploadFile
);

uploadRouter.post(
  "/services",
  // isAuthenticatedMiddleware,
  upload("services").single("image"),
  uploadController.uploadFile
);

export default uploadRouter;
