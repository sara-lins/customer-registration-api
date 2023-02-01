import prisma from "./_index";

const updateContactService = async (id: string, dataContact) => {
  const contactUpdated = await prisma.contact.update({
    where: {
      id,
    },
    data: dataContact,
  });

  return contactUpdated;
};

export default updateContactService;
