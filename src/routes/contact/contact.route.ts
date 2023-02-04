import { Router } from "express";
import { retrieveContactController } from "../../controllers/contact/retrieveContact.controller";
import { retrieveContactByIdController } from "../../controllers/contact/retrieveContactById.controller";
import { createContactController } from "../../controllers/contact/createContact.controller";
import { updateContactController } from "../../controllers/contact/updateContact.controller";
import { deleteContactController } from "../../controllers/contact/deleteContact.controller";
import { authToken } from "../../middlewares/globals/authToken.middleware";
import { dataContactCreateRequest } from "../../middlewares/contact/dataContactCreateRequest.middleware";
import { dataContactUpdateRequest } from "../../middlewares/contact/dataContactUpdateRequest.middleware";
import { isContactIdExists } from "../../middlewares/contact/isContactExists.middleware";

const contactsRoutes = Router();

contactsRoutes.get("", retrieveContactController);
contactsRoutes.get("/:id", isContactIdExists, retrieveContactByIdController);
contactsRoutes.post(
  "/register",
  dataContactCreateRequest,
  createContactController
);
contactsRoutes.patch(
  "/:id",
  authToken,
  isContactIdExists,
  dataContactUpdateRequest,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  authToken,
  isContactIdExists,
  deleteContactController
);

export default contactsRoutes;
