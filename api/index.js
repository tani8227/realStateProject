import express from "express";
import * as homeController from "../controllers/home/homeController.js";
import userRoutes from "./user.js";
import agentRoutues from "./agent.js";
const apiRouter = express.Router();


apiRouter.get("/", homeController.homePage);
apiRouter.use("/user", userRoutes);
apiRouter.use("/agent", agentRoutues);

export default apiRouter;