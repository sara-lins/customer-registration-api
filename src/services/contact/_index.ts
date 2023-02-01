import prisma from "../../prisma";
import retriveContactService from "./retrieveContact.service";
import retrieveContactByIdService from "./retrieveContactById.service";
import createContactService from "./createContact.service";
import updateContactService from "./updateContact.service";
import deleteContactService from "./deleteContact.service";

export {
  retriveContactService,
  retrieveContactByIdService,
  createContactService,
  updateContactService,
  deleteContactService,
};

export default prisma;
