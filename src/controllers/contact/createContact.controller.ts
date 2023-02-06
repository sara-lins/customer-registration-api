import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { createContactService } from "../../services/contact/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const { id } = req.user;

    const contact = await createContactService(id, data);

    return res.status(201).json(contact);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(400).json({
        status: "Error",
        message: error.message,
      });
    }
  }
};
