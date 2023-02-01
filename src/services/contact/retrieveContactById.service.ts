import prisma from "./_index";

const retrieveContactByIdService = async (id: string) => {
  const contactById = await prisma.contact.findUnique({
    where: {
      id,
    },
  });

  return contactById;
};

export default retrieveContactByIdService;
