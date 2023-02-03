import { Contact } from "@prisma/client";
import prisma from "./_index";

const createContactService = async (data): Promise<Contact> => {
  const contact = await prisma.contact.create({
    data,
  });

  return contact;
};

export default createContactService;
