import { Request, Response } from "express";
import deleteContatoService from "../../services/contact/deleteContact.service";

export const deleteContatoController = async (req: Request, res: Response) => {
  const { id: contactId } = req.params;

  await deleteContatoService(contactId);

  return res.status(204).send();
};
