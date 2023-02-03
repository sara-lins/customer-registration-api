import { Request, Response } from "express";
import updateContactService from "../../services/contact/updateContact.service";

export const updateContactController = async (req: Request, res: Response) => {
  const { id: contactId } = req.params;
  const { ...data } = req.body;

  const contactUpdated = await updateContactService(contactId, data);

  return res.status(200).json(contactUpdated);
};
