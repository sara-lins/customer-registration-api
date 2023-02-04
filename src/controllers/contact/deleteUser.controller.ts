import { Request, Response } from "express";
import { deleteContactService } from "../../services/contact/deleteContact.service";

export const deleteContactController = async (req: Request, res: Response) => {
  const { id: contactId } = req.params;

  console.log(contactId);

  await deleteContactService(contactId);

  return res.status(204).send();
};
