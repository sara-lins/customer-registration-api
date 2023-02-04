import { AppError } from "../../errors/AppError";
import prisma from "./_index";

export const deleteContactService = async (id: string) => {
  const contactDeleted = await prisma.contact.delete({
    where: {
      id,
    },
  });

  if (!contactDeleted) {
    throw new AppError("Internal database error");
  }

  return contactDeleted;
};
