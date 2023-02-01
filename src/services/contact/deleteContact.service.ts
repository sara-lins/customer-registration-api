import prisma from "./_index";

const deleteContactService = async (id: string) => {
  const contactDeleted = await prisma.contact.delete({
    where: {
      id,
    },
  });

  return contactDeleted;
};

export default deleteContactService;
