import { Router } from "express";
import { createContactController } from "../../controllers/contact/createUser.controller";
import { deleteUserController } from "../../controllers/contact/deleteUser.controller";
import { retrieveContactController } from "../../controllers/contact/retrieveUser.controller";
import { retrieveContactByIdController } from "../../controllers/contact/retrieveUserById.controller";
import { updateContactController } from "../../controllers/contact/updateUser.controller";

const contactsRoutes = Router();

contactsRoutes.get("/", retrieveContactController);
contactsRoutes.get("/:id", retrieveContactByIdController);
contactsRoutes.post("/register", createContactController);
contactsRoutes.patch("/:id", updateContactController);
contactsRoutes.delete("/:id", deleteUserController);

export default contactsRoutes;
