import { Contact } from "@prisma/client";
import { IContactDataUpdate, IContactResponse } from "../../interfaces/contact";
import prisma from "./_index";

export const updateContactService = async (
  id: string,
  dataContact: IContactDataUpdate
): Promise<IContactResponse> => {
  const contactUpdated: IContactResponse = await prisma.contact.update({
    where: {
      id,
    },
    data: dataContact,
  });

  return contactUpdated;
};
