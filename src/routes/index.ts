import { Router } from "express";
import contactsRoutes from "./contact/contact.route";
import usersRoutes from "./user/user.route";

const router = Router();

router.use("/user", usersRoutes);
router.use("/contact", contactsRoutes);
