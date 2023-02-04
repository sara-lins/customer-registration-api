import { IContactResponse } from "../../interfaces/contact";
import prisma from "./_index";

export const retrieveContactService = async (): Promise<IContactResponse[]> => {
  const contacts: IContactResponse[] = await prisma.contact.findMany();

  return contacts;
};
