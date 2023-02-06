import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { deleteContactService } from "../../services/contact/deleteContact.service";

export const deleteContactController = async (req: Request, res: Response) => {
  try {
    const { id: contactId } = req.params;

    await deleteContactService(contactId);

    return res.status(204).send();
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: "Error",
        message: error.message,
      });
    }
  }
};
