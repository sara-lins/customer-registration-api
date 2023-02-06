import { AppError } from "../../errors/AppError";
import { IContactDataUpdate, IContactResponse } from "../../interfaces/contact";
import prisma from "./_index";

export const updateContactService = async (
  id: string,
  dataContact: IContactDataUpdate
): Promise<IContactResponse> => {
  const { email, phone } = dataContact;

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

  const contactUpdated: IContactResponse = await prisma.contact.update({
    where: {
      id,
    },
    data: dataContact,
  });

  return contactUpdated;
};
