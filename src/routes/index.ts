import { Router } from "express";
import { errorMiddleware } from "../middlewares/globals/error";
import contactsRoutes from "./contact/contact.route";
import usersRoutes from "./user/user.route";

export const routers = Router();

routers.use("/user", usersRoutes);
routers.use("/contact", contactsRoutes);
routers.use(errorMiddleware);
