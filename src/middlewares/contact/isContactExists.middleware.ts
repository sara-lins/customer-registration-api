import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";

export const isContactIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const isContactExists = await prisma.contact.findUnique({
      where: {
        id,
      },
    });

    if (!isContactExists) {
      throw new Error("ID Contact not exists");
    }

    next();
  } catch (error) {
    return res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};
