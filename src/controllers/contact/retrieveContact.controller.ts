import { Request, Response } from "express";
import { retrieveContactService } from "../../services/contact/retrieveContact.service";

export const retrieveContactController = async (_: Request, res: Response) => {
  const contact = await retrieveContactService();

  return res.status(200).json(contact);
};
