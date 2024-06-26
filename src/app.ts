import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";
import cookieParser from "cookie-parser";

import { PostgresDbConfig } from "./infrastructure/database/postgres/db-postgres.config";
import { errorHandler } from "./shared/middlewares/error.middleware";
import { notFoundHandler } from "./shared/middlewares/not-found.middleware";
import categoryRouter from "./presentation/routes/category.route";
import roleRouter from "./presentation/routes/role.route";
import { authRoutes } from "./presentation/routes/auth/auth.route";

import Passport from "./shared/middlewares/authz.middleware";
import userRouter from "./presentation/routes/user.route";
import documentRouter from "./presentation/routes/document.route";
import commentRouter from "./presentation/routes/comment.route";
import tagRouter from "./presentation/routes/tag.route";
import postRouter from "./presentation/routes/post.route";
import eventRouter from "./presentation/routes/event.route";
import serviceRouter from "./presentation/routes/service.route";
import projectRouter from "./presentation/routes/project.route";
import bannerRouter from "./presentation/routes/banner.route";
import uploadRouter from "./presentation/routes/upload.route";

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Express = express();

/**
 *  App Configuration
 */

// Function to serve all static files
// inside public directory.
app.use(express.static('public'));

// enable the use of request body parsing middleware
app
  .use(
    express.urlencoded({
      extended: true,
    })
  )
  .use(express.json({ limit: "50kb" }))
  .use(
    cors({
      origin: "*",
      credentials: true,
    })
  )
  .use(cookieParser())
  .use(helmet())
  .use(
    session({
      // store: store,
      secret: `${process.env.SESSION_SECRET}`,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
    })
  )
  .use(Passport.initialize())
  .use(Passport.authenticate("session"))
  .use(Passport.session());

const db = new PostgresDbConfig();
db.connection();

// Custom middleware to add Access-Control-Allow-Origin header
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // You can add other CORS headers here if needed
  next();
});
// authentication
app.use("/", authRoutes);

// route  endpoints
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Rent Kojo REST API");
});
app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/categories", categoryRouter);
app.use("/api/roles", roleRouter);
app.use("/api/users", userRouter);
app.use("/api/documents", documentRouter);
app.use("/api/comments", commentRouter);
app.use("/api/tags", tagRouter);
app.use("/api/posts", postRouter);
app.use("/api/events", eventRouter);
app.use("/api/services", serviceRouter);
app.use("/api/projects", projectRouter);
app.use("/api/banners", bannerRouter);
app.use("/api/banners", bannerRouter);
app.use("/api/uploads", uploadRouter);

// middleware interceptions
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`⚡️[server]: Listening on port ${PORT}`);
});
