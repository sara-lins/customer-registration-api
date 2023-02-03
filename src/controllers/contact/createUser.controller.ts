import { Request, Response } from "express";
import createContactService from "../../services/contact/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const { ...data } = req.body;

  const contact = await createContactService(data);

  return res.status(201).json(contact);
};
