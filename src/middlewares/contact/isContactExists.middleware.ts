import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import prisma from "../../prisma";

export const isContactIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const isContactExists = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!isContactExists) {
    throw new AppError("ID Contact not exists");
  }

  next();
};
