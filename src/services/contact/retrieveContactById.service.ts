import { Contact } from "@prisma/client";
import prisma from "./_index";

const retrieveContactByIdService = async (
  id: string
): Promise<Contact | null> => {
  const contactById = await prisma.contact.findUnique({
    where: {
      id,
    },
  });

  return contactById;
};

export default retrieveContactByIdService;
