import { Router } from "express";

const contactsRoutes = Router();

contactsRoutes.get("/");
contactsRoutes.get("/:id");
contactsRoutes.post("/");
contactsRoutes.patch("/:id");
contactsRoutes.delete("/:id");

export default contactsRoutes;
