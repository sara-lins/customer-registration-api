import { Request, Response } from "express";
import { createContactService } from "../../services/contact/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const { id } = req.user;

  const contact = await createContactService(id, data);

  return res.status(201).json(contact);
};
