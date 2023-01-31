import { Router } from "express";

const usersRoutes = Router();

usersRoutes.get("/");
usersRoutes.get("/:id");
usersRoutes.post("/login");
usersRoutes.patch("/:id");
usersRoutes.delete("/:id");

export default usersRoutes;
