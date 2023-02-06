import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { updateContactService } from "../../services/contact/updateContact.service";

export const updateContactController = async (req: Request, res: Response) => {
  try {
    const { id: contactId } = req.params;
    const { ...data } = req.body;

    const contactUpdated = await updateContactService(contactId, data);

    return res.status(200).json(contactUpdated);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(400).json({
        status: "Error",
        message: error.message,
      });
    }
  }
};
