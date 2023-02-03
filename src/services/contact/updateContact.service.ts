import { Contact } from "@prisma/client";
import prisma from "./_index";

async function updateContactService(id: string, dataContact): Promise<Contact> {
  const contactUpdated = await prisma.contact.update({
    where: {
      id,
    },
    data: dataContact,
  });

  return contactUpdated;
}

export default updateContactService;
