import { IContact, IContactResponse } from "../../interfaces/contact";
import prisma from "./_index";
import { AppError } from "../../errors/AppError";

export const createContactService = async (
  userId: string,
  data: IContact
): Promise<IContactResponse> => {
  const { fullname, email, phone, created_at, updated_at } = data;

  const isEmailExists = await prisma.contact.findUnique({
    where: {
      email,
    },
  });

  if (isEmailExists) {
    throw new AppError("Email is already exists");
  }

  const isPhoneExists = await prisma.contact.findUnique({
    where: {
      phone,
    },
  });

  if (isPhoneExists) {
    throw new AppError("Phone is already exists");
  }

  const contact: IContactResponse = await prisma.contact.create({
    data: {
      fullname,
      email,
      phone,
      created_at,
      updated_at,
      userId,
    },
  });

  return contact;
};
