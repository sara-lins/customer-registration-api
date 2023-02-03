import { Request, Response } from "express";
import retrieveContactByIdService from "../../services/contact/retrieveContactById.service";

export const retrieveContactByIdController = async (
  req: Request,
  res: Response
) => {
  const { id: contactId } = req.params;

  const contact = await retrieveContactByIdService(contactId);

  return res.status(200).json(contact);
};
