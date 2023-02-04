import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import prisma from "../../prisma";

export const isUserIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const isUserExists = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!isUserExists) {
    throw new AppError("ID user Client not exists");
  }

  next();
};
