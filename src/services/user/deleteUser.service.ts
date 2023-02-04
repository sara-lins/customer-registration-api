import { AppError } from "../../errors/AppError";
import prisma from "./_index";
import "express-async-errors";

export const deleteUserService = async (id: string) => {
  const userDeleted = await prisma.user.delete({
    where: {
      id,
    },
  });

  if (!userDeleted) {
    throw new AppError("Internal database error");
  }
};
