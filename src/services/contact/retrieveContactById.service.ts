import { IContactResponse } from "../../interfaces/contact";
import prisma from "./_index";

export const retrieveContactByIdService = async (
  id: string
): Promise<IContactResponse> => {
  const contactById: IContactResponse | null = await prisma.contact.findUnique({
    where: {
      id,
    },
  });

  return contactById!!;
};
