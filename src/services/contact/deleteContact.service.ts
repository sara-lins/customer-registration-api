import prisma from "./_index";

export const deleteContactService = async (id: string) => {
  const contactDeleted = await prisma.contact.delete({
    where: {
      id,
    },
  });

  return contactDeleted;
};
